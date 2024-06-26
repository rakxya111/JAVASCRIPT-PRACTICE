console.dir(document.body);//for object
console.log(document.body);
document.body.childNodes[3].innertext = "ABCD";
document.body.style.background = "Green";

//selecting with ID
let heading = document.getElementById("heading");
console.dir(heading);

//selecting with Class
let h = document.getElementsByClassName("myclass");
console.dir(h);

//selecting with Tag Name

let para = document.getElementsByTagName("p");
console.dir(para);

//returns first element [returns nodes list]
let elements1 = document.querySelector(".myclass");
console.dir(elements1);

//all elements
let t = document.querySelectorAll("p");
console.dir(t);


//first child:node

const p = document.getElementById("para");
console.log(p.firstElementChild);
console.log(p.lastElementChild);//last child:node
for (const child of p.children) //children
{
    console.log(child);
}


const r = document.querySelector("div");
console.dir(r.innerHTML);  //innerHTML-> show inside text with html content
console.dir(r.innerText);//innerText -> show inside text
console.dir(r.innerText = "acdd"); //modifying html text
console.dir(r.textContent); //do even show hidden content

