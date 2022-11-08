let company_details =[{company_name:"tata",start_date:1975,name:"nathan",age:20,end_date:2021,catagory:"Wholesale"},
{company_name:"relaince",start_date:1988,name:"neelu",age:22,end_date:2019,catagory:"Retail"},
{company_name:"mrf",start_date:1990,name:'pavi',age:52,end_date:2016,catagory:"Wholesale"},
{company_name:"ceat",start_date:1991,name:"nathika",age:53,end_date:2010,catagory:"Retail"}]
                                        // part:1
// print company name using forEach loop ex-1

/*company_details.forEach((company) => {
    var companyName = company.company_name
    console.log(companyName)
});*/

// print the name of the company that started after 1987 ex-2

/*company_details.forEach((company) => {
    let companyStart = company.start_date
    if(companyStart > "1987"){
        companyName = company.company_name
        console.log(companyName)
    }
});*/

// append the companies that have the catagory retail

/*company_details.forEach((company) => {
    let companyCatogory = company.catagory
    if(companyCatogory == "Retail"){
        company.start_date = company.start_date + 1
        var content = `<p>companyname:${company.company_name} &nbsp startDate:${company.start_date}&nbsp catagory:${company.catagory} &nbspendDate:${company.end_date}</p>`
    }
    $('#show').append(content) 
});*/

// sort the companies based on their end date accending order ex-4

/*company_details.sort((a,b) =>{
    let end_date1 =a.end_date
    let end_date2 =b.end_date
    if (end_date1 < end_date2) {
        return -1;
    } else if (end_date1 == end_date2) {
        return 0;
    } else {
        return 1;
    }
});
console.log(company_details)*/


// sort ages in decendinng order  ex-5

/*let result=company_details.map((dec) =>{
 let age= dec.age
 return age
});
console.log(result.reverse())*/

// print the sum of ages using reduce ex-6

/*let sum_of_ages = company_details.reduce((accumulator,first_age) =>{
    return accumulator + first_age.age
},0);
console.log(sum_of_ages)*/

// print the name using object destructuring ex-7

/*let my_obj = ()=>{
    return {
        name:"nathan",
        catagory:"wholesale"}
}
let{name,catagory} = my_obj()
console.log(name)*/


// create function that takes a unknown number of argument ex-8
/*let show = (...a) =>{
    let total =0;
    for(let items of a){
        total += items
    }
    return total;
}
console.log(show(1,2,3,4))*/

// function that takes unknown number of arguments of any type and add them into array

 /*let my_function = (...a) =>{
    let arr =[]
    let total =0;
    for(let item of a ){
        total += item
    }
    arr.push(total)
    console.log(arr)
 }
my_function(1,3,4,"nathan")*/

// distructure the property street in a variable named street from the object person ex-10

/*let person = {
    name:"nathan",
    street:"southstreet"
}
let{name,street} = person
console.log(street)*/

// write a function that everytime you call it, it returns a number that increments starting from 0 ex-11
/*var n = 0;
function increment(){
    console.log(n)
    n++;
}
increment()
increment()
increment()*/

                                        // Part-2


// sum of two argument if the second argument do no provide that will take the value first argument plus 1 ex-1

/*let sum = (a,b=a+1) => a+b;
console.log(sum(4))*/

// create the constructor that returns an instance even if you do not add the keyword new ex-2
// Doubt****
/*class Mrf{
    constructor(bat,tire){
        this.bat = bat
        this.tire = tire
    }
    detailsForbat(){
        return this.bat
    }
    detailsFortire(){
        return this.tire
    }
}

let mrf = Mrf
Mrf = function(a,b){
    return new mrf(a,b)
}
console.log(Mrf("bat","tire").detailsForbat())
console.log(Mrf("bat","tire").detailsFortire())*/

// Javasccript code to compare two obejct proprties ex-3

/*let obj1 = {f_name:"nathan",l_name:"yogesh"}
let obj2 = {f_name:"nathan",l_name:"yogesh"}
let obj_check = function(a,b){
    let obj1 = JSON.stringify(a)
    let obj2= JSON.stringify(b)
    if(obj1 === obj2){
        console.log("objects are equal")
    }
    else{
        console.log("objects are not equal")
    }
}
obj_check(obj1,obj2)*/

// javascript code to filter the specified values form array,and return the original array without the filterd value

let arr = ["nathan",1,"neelakandan",2,"viji",3,"muthukrishnan",4]
let arr1 = arr.filter((a) => {
    if(typeof(a) == "string"){
        return a
    }

})
console.log(arr1)