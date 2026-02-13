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
for(let i=0;i<5;i++)
{
    console.log("i : ",i);
}


console.log("loop terminates at ",i);