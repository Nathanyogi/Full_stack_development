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

// javascript code to filter the specified values form array,and return the original array without the filterd value ex-4

/*let arr = ["nathan",1,"neelakandan",2,"viji",3,"muthukrishnan",4]
let arr1 = arr.filter((a) => {
    if(typeof(a) === "number"){
        return a
    }
})
arr = arr.filter(item => {
    let original_arr = !arr1.includes(item)
    return original_arr
})
console.log(arr)*/

// program to check the value is null or undefind ex-5

/*let a;
let value = element => {
    if(element === undefined){
        return `value is undefined`
    }
    else if(element == undefined){ //null==undefind true   null===undefined  false
        return `value is null`
    }
    else{
        return `value is not undefined and null`
    }
}
console.log(value(a))*/

                                        //Part-3

//loop and print the properties of the object ex-1

/*let person = {
    name:"nathan",
    age:22,
    sex:"male"
}
for(let prop in person){
    console.log(`${prop}: ${person[prop]}`)
}*/

//console warning ex-3

// console.warn("Please update your browser")

// console error ex-4

// console.error("Invalid Input")

// console statement to print properties of element ex-5
/*let p=['1,2,3,4']
console.log(p) */

// try catch statement ex-6

/*let a =10;
let b =0
try{
    console.log(c/b)
}
catch(error){
    console.warn('error occur')
    console.error(error)
}
finally{
    console.log("finall will executes every time")
}*/

// switch statement to find which day ex-7

/*let check_day = (day) =>{
    let dayname;
    switch(day){
        case 0:
            dayname ='sunday';
            break;
        case 1:
            dayname ='monday';
            break;
        case 2:
            dayname ='tuesday';
            break;
        case 3:
            dayname ='wednesday';
            break;
        case 4:
            dayname ='Thursday';
            break;
        case 5:
            dayname ='friday';
            break;
        case 6:
            dayname ='saturday';
    }
    return dayname
}
let today =new Date().getDay()
console.log(check_day(today))*/

// five diff ways to check the object is empty ex-8
/*let person ={
}
// method 1
let key = Object.keys(person)
if(key.length == 0){
    console.log("object is empty")
}
else{
    console.log("object is not empty")
}

// method 2
console.log(jQuery.isEmptyObject(person))

// method 3
console.log(JSON.stringify(person) === '{}')*/

//four diff ways to find values in array ex-9

/*let arr =[1,2,3,4,5]
// method 1
console.log(arr.includes(2))

// method 2
console.log(arr.indexOf(2))

// mwthod 3
console.log(arr.findIndex(findVlaue))


// method 4
function findVlaue(value){
    if(value == 3){
        return value
    }
}
let state = false;
let item;
let value=arr.forEach((item) =>{
    if(item==2){
        state=true;
    }   
})

if(state == true){
    console.log(`value is in the array`)
}*/

                                        // part-4

// create a function that takes a array as an argument and remove all duplicates ex-1

let arr = [1,2,3,2,3]
/*let remove_duplicate = (arr) =>{
    let new_array = [... new Set(arr)]
    console.log(new_array)
}

remove_duplicate(arr)*/

// filter exercise ex-4

/*arr = arr.filter(values =>values>1)
console.log(arr) */

                                        // part-5

// concat num1 and num2 and clone it into num3 find max and min number ex-1

/*let num1 =[1,2,3,4]
let num2 =[5,6,7,8];

let clone = [...num1,...num2]
let num3 =[...clone]

console.log(Math.min(...num3))
console.log(Math.max(...num3))*/

// sum the total of all fishermen ex-2

let fishermen_details =[
    {f_name:"nathan",score:140},
    {f_name:"neelakandan",score:120},
    {f_name:"muthukrishnan",score:80},
    {f_name:"karthik",score:60},
    {f_name:"sunil",score:-1},
]
/*let total =0;
let i =0
// find average
let func = () =>{
    fishermen_details.forEach((item) =>{
        i++
        total += item.score
        return total,i
    });
    let average = total/i
    console.log(average)
}
func()
// print the name of the fishermen who takes the score above 100
let names =fishermen_details.filter((item)=>{
    if(item.score > 100){
        return item
    }
})
names.forEach((prop)=>console.log(prop.f_name)) */

// regular expression to find the number in the string ex-3

 /*let find_num = /\d+/g;
 let str = "hello do know my age is 22 and my jercy name is nathan412200"
 console.log(str.match(find_num))*/

//  function that checks if scores are all positive numbers ex-4

/*let positive_checker = function(){
    let positive_arr=fishermen_details.map((item)=> item.score >= 0)
    if(positive_arr.includes(false)){
        console.log("scores include negative value")
    }
    else{
        console.log("scores are possitive value")
    }
}
positive_checker()*/

// check the arguments are possitive or negative ex-5

/*let arg_checker =function(a,b){
    let result;
    if(a >= 0 && b>=0){
        result="both argivemnet are possitive"
    }
    else if((a<0 && b>=0) || (a>=0 && b<0)){
        result="one of the argivement is negative"
    }
    else{
        result="both argivement are negative"
    }
    return result
}
console.log(arg_checker(-1,-1))*/