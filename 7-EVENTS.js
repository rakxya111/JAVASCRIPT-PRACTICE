//getAttribute -> get value of an attribute
let first = document.getElementById("first");
let a1 = first.getAttribute("class");
console.log(a1);

//setAttribute :- to set a new attribute 
first.setAttribute("class","hello1");

//removeAttribute -> to remove the attribute
//first.removeAttribute("class");

let second = document.createElement("div");
second.className = "alert";
second.innerHTML = "hello123";
document.body.append(second);
first.classList.add("red");
first.classList.toggle("white");
first.classList.remove("red");

//SET-TIMEOUT FUNCTION

// setTimeout(function(){
//     alert("I am set Timeout");
// },3000);

let ap =( (a,b) =>{
console.log("Yes i am running" + (a+b));
});

setTimeout(ap,2000,1,2); //SYNTAX : setTimeout(function,delay,arg1,arg2); -> running after given interval once.

setInterval(ap,3000,3,4);//SYNTAX : setInterval(function,delay,arg1,arg2); -> running after given interval time again & again.

//EVENT LISTENER

let a = (()=>{
alert("HELLO 1");
});

let b = (()=>{
alert("HELLO 2");
});

let evt = document.getElementById("btn");
evt.addEventListener('click',a);
evt.addEventListener('click',b);

let d = prompt("Enter a number :");

if(d=="2"){
    evt.removeEventListener('click',b);
}
