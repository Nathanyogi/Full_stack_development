const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product_name = urlParams.get('name')
function showProduct(){
    let list=JSON.parse(localStorage.getItem("product_list"));
    let products = ""
    let spec =""
    if(product_name !=null){
        for(let i = 0;i<list.length;i++){
            for(let j = 0;j<list[i][product_name].length;j++){
                if(list[i][product_name][j].specification){
                    for(let k=0;k<list[i][product_name][j].specification.length;k++){
                        spec = spec+"<li class='text-secondary mt-2'>"+list[i][product_name][j].specification[k]+"</li>"
                    }
                }
                products += "<div class='row'>"+"<div class=\"col-4 text-center\">" + "<img src="+list[i][product_name][j].img +">"+"</div>"+"<div class=col-6>"+"<h4>"+list[i][product_name][j].product 
                +"</h4>"+"<ul>"+spec+"</ul>" +"</div>"+"<div class=col-2>"+"<h2> Rs"+list[i][product_name][j].offer_price+"</h2>"+"<span class=text-secondary><s>Rs "+list[i][product_name][j].original_price+"</s></span>"
                +"<span class=text-success>"+" "+list[i][product_name][j].offer+" off</span>"+"<p>"+list[i][product_name][j].delivery+"</p>"+"<a href=# class='btn btn-warning' onclick='loginCheck()' >BUY NOW</a><a href=# class='btn btn-secondary mt-2' onclick=addToCart("+i+","+'"'+product_name+'"'+","+j+")>ADD TO CART </a>"+"</div>"+"</div>"+"<hr/>"
                spec="";
            }
        }
    document.getElementById('products').innerHTML = products
    }
}

showProduct()

function loginCheck(){
    let buynow_log =JSON.parse(localStorage.getItem('userdetails'))
    for(let i=0;i<buynow_log.length;i++){
        if(buynow_log[i].status == true){
            location.replace('buy.html')
        }
    }
    window.location.replace("login.html?name="+product_name)  
}
// Add to cart
if(! localStorage.getItem('cart')){
    localStorage.setItem("cart",JSON.stringify([]))
}
let cart = JSON.parse(localStorage.getItem('cart'))
function addToCart(proIndex,product,keyIndex){
    let products  = JSON.parse(localStorage.getItem('product_list'))
    cart.push(products[proIndex][product][keyIndex])
    localStorage.setItem("cart",JSON.stringify(cart))
    window.location.replace("cart.html")
    
}

// cart page
function showCartProduct(){
    let cart_items = JSON.parse(localStorage.getItem('cart'))
    let cart_element="";
    for(let i=0;i<cart_items.length;i++){
        cart_element += "<div class='row bg-white'>"+ 
        "<div class='col-4'>"+"<img src="+cart_items[i].img+"></div>"+
        "<div class='col-8'><p class='card-text'>"+ cart_items[i].product+"</p>"+
        "<h3>Rs: "+cart_items[i].offer_price+"</h3><p class='text-success'><span class='mr-2'><s class='text-secondary'>"+cart_items[i].original_price+"</s></span>"+cart_items[i].offer+" off</p><p>"+cart_items[i].delivery+"</p><a class='btn bg-secondary' onclick='removeItem("+i+")'> RemoveItem</a></div>"+"</div>"
    }
    document.getElementById('cartlist').innerHTML = cart_element
}
showCartProduct()


function removeItem(index){
    let remove_cart = JSON.parse(localStorage.getItem('cart'))
    remove_cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(remove_cart))
    setTimeout("location.reload(true);",0)
    showCartProduct();
}

