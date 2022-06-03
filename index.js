// //Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button?


function changeHeading(){
    document.getElementById("Heading").innerHTML = "MERN stack";
}

//Write code to get 1st H1 element from a webpage using DOM
function getText(){
    let getText = document.getElementsByTagName("h1");
    console.log(getText[0].innerText);
}

getText();

//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second?

function getTime(){
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();

    document.getElementById("HH").innerText = HH ;
    document.getElementById("MM").innerText = MM ;
    document.getElementById("SS").innerText = SS ;

    setTimeout(getTime , 1000);
}

getTime();

//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function replaceText(){
    let replaceText = document.getElementById("Helloworld");
    replaceText.innerText = "Welcome to Elevation academy";
}

//Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

$("#hide").click(function(){
    $("#Hello").hide();
})

//Given an array of 0's and 1's find out number of 0's?

let array = [1,0,1,0,1,0];
let count=0;
for(let i of array){
    if(i == 0){
         count=count+1;
    }
}

console.log(count);

//Given an array find out total no. of odd and even nos.?

let arr = [2,3,4,5,6];
let x=0;
let a=0;
for(let i=0 ; i<arr.length ; i++ ){
    if(arr[i]%2==0){
        x=x+1;
    }
    else{
        a=a+1;
    }
}
console.log(x);
console.log(a);

//Given a string find out number of vowels ?

let vowels = ["a","e","i","o","u"];

let str = "kusuma krishna";

var S=0
for(let s of str){
    if(vowels.includes(s)){
          S=S+1;
    }
}
console.log(S);

//Explain passed by value and passed by reference?

//pass by value : Passing a directly value to the function is called pass by value .The changes made is not effect on original .It creates a copy of that.
//pass by reference : Passing an address of the variable insted of passing directly value to the function .The changes made will effect the original .Because it directly pass the address 
//pass by reference:
function PassbyReference(obj) {
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;
  
    console.log(`Inside Pass By Reference 
        Function -> a = ${obj.a} b = ${obj.b}`);
}
  
let obj = {
    a: 10,
    b: 20
}
PassbyReference(obj);

function Passbyvalue(a, b) {
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass by value 
        function -> a = ${a} b = ${b}`);
}
  
let A = 1;
let b = 2;
console.log(`Before calling Pass by value 
        Function -> a = ${A} b = ${b}`);
  
Passbyvalue(A, b);
