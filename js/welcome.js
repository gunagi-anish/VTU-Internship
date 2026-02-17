console.log("hello")
console.log("welcome to Javascript classes!!")
console.error("Error");
// alert("Warning");
// prompt("Enter a values");

//datatypes in JS
//var, const, boolean, number, string, null, undefined, char

var fullname="Anish Dileep Gunagi";
var age=21;
var avg=18.5;
var isEligible=false;

//var datatype has a function scope

console.log("Values in fullname variable : ",fullname);


function GetData(){
    var j=10;
    console.log("Variable j : ",j);
}

GetData();


//let Datatype
//let has a block scope

let sgpa=9.0;
let grade="A";
let isAssignment=false;

function Sum(){
    if(3>2){
        var m=10;
    }
    console.log("Variable m: ",m);
}

Sum();

//eg for let keyword
for(var i=0;i<5;i++)
{
    console.log("i : ",i);
}


console.log("loop terminates at ",i);



//const keyword
const pi=3.14;
console.log(pi);



//undefined keyword
var fruitslist;
console.log("Variable fruitslist : ",fruitslist);


//null keyword
var scoredPoints=null;
console.log("scoredPoints : ",scoredPoints);


//hoisting in js
console.log(spares);
var spares=10;

/// |
/// |
/// v
// internal flow in js
// var spares;
// console.log(spares);
// spares=10;


//datastructures

//array
var mylist=[1,1.2,true,false,'A',"hello",null];
console.log(mylist)

//insertion, deletion, traversal, sorting, searching, push, pop

//splice()
//syntax : spilce(starting index, delete count, new value(s))

var habbits=["dancing","studying","playing"]
habbits.splice(1,0,"swimming","drawing");
console.log("After Insertion : ",habbits);

//deletion

var myorder=[10,20,30,40];
myorder.splice(2,1)
console.log("After deletion : ",myorder);


//traversal
//map();

//callback functons : if a function accepts or retuns a function it is called as a callback function

// function getOrders()
// {
//     return function test(){}
// }


//map() is a callback function
//use :  we can access the elements of an array or compute a new array from it

var myorderhistory=[10,120,30,40]
myorderhistory.map((ele)=>{
    console.log("Map item : ",ele)
})


var computearray=myorderhistory.map((i)=>{
    return i-3;
})

console.log("Computed array : ",computearray)


//searching
//filter() is a callback function

var cancelledlist=[1101,1104,1120]
var filteredarray=cancelledlist.filter((i)=>{
    return i!==1101
})

console.log("Filtered array : ",filteredarray)


//sorting
//sort() is a callbakc function

var distance=[100,23,45,229,11,33]
var sortedarray=distance.sort((a,b)=>{
    return a-b;
})

console.log("Sorted array : ",sortedarray)


//push and pop
var transactionhistory=["tr01","tr02","tr09","tr05"]
transactionhistory.push("tr07")
console.log("After push : ",transactionhistory)
transactionhistory.pop()
console.log("After pop : ",transactionhistory)


//JSON (Javascript object notation)

var myProfile={
    name: "Anish",
    role: "Admin/////////////",
    exp: 5,
    edu: "B.E."
}

console.log("My profile object : ",myProfile)


//destructuring of an object
console.log("Eductation of the user : ",myProfile.edu)


//Nested objects
var orderAddressProfile={
    primaryEmail : "test@gmail.com",
    phone: "1234567890",
    address: {
        street: "5",
        doorNo: "#18",
        city: "ABC"
    }
}

console.log("Nested objects : ",orderAddressProfile)

//Array of Objects
var productList=[{itemname:"Shoes", price: "100", rating: "5"},{itemname:"Toys", price: "1000", rating: "4.3"},{itemname:"Bag", price: "200", rating: "4.5"}]
console.log("product list : ",productList)

//Map()
productList.map((b)=>{
    console.log(b.itemname)
})

//filter()
var filteredproduct=productList.filter((a)=>{
    return a.price>100
})

console.log(filteredproduct)

var newfilteredproduct=productList.filter((a)=>{
    return a.rating>=4 && a.rating<=4.5
})

console.log(newfilteredproduct)


//DOM (DOcument Object Model)
function onSubmit(){
    alert("button clicked");
    var typedUSername =document.getElementById("typeIn").value;
    alert(typedUSername);

    var typedAge=document.getElementById("typedAge").value;
    console.log("Age entered by user : ",typedAge)

    var typedEmail=document.getElementById("emailID").value;
    console.log("Email entered by user : ",typedEmail)

    var typedPass=document.getElementById("pass").value
    console.log("password entered by user : ",typedPass)

    var typedSearch=document.getElementById("search").value
    console.log("Search entered by user : ",typedSearch)

    var selectedcountry=document.getElementById("country").value
    console.log("Car selected by user : ",selectedcountry)

    //getElementbyName()
    var radiooptions=document.getElementsByName("gender")
    for(let i=0;i<radiooptions.length;i++){
        if(radiooptions[i].checked)
        {
            console.log(radiooptions[i].value)
        }
    }

    var subjects=document.getElementsByName("subject")
    for(let i=0;i<subjects.length;i++){
        if(subjects[i].checked)
        {
            console.log(subjects[i].value)
        }
    }


    var selectedfile=document.getElementById("fileName").value
    console.log("File selected by user : ",selectedfile)

    var selectedcolor=document.getElementById("colorName").value
    console.log("Color selected by user : ",selectedcolor)

    var selectedrange=document.getElementById("rangeName").value
    console.log("Range selected by user : ",selectedrange)
}

