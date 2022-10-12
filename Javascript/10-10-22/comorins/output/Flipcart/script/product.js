const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product_name = urlParams.get('name')
let product_list=JSON.parse(localStorage.getItem("product_list"));

let products = ""
let spec =""
for(let i = 0;i<product_list.length;i++){
    for(let j = 0;j<product_list[i][product_name].length;j++){
        if(product_list[i][product_name][j].specification){
            for(let k=0;k<product_list[i][product_name][j].specification.length;k++){
                spec = spec+"<li class='text-secondary mt-2'>"+product_list[i][product_name][j].specification[k]+"</li>"
            }
        }
        products += "<div class='row'>"+"<div class=\"col-4 text-center\">" + "<img src="+product_list[i][product_name][j].img +">"+"</div>"+"<div class=col-6>"+"<h4>"+product_list[i][product_name][j].product 
        +"</h4>"+"<ul>"+spec+"</ul>" +"</div>"+"<div class=col-2>"+"<h2> Rs"+product_list[i][product_name][j].offer_price+"</h2>"+"<span class=text-secondary><s>Rs "+product_list[i][product_name][j].original_price+"</s></span>"
        +"<span class=text-success>"+" "+product_list[i][product_name][j].offer+" off</span>"+"<p>"+product_list[i][product_name][j].delivery+"</p>"+"<a href=# class='btn btn-warning'>BUY NOW<span></span></a><a href='#' class='btn btn-secondary mt-2'>ADD TO CART </a>"+"</div>"+"</div>"+"<hr/>"
        spec="";
    }
}
document.getElementById('products').innerHTML = products