//getAttribute(attr) -> To get the Attribute value.

let div = document.querySelector("div");

console.log(div.getAttribute("id"));

console.log(div.getAttribute("name"));

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

//setAttribute(attr,value) -> to set the attribute value

let para1 = document.querySelector("p");
console.log(para1.setAttribute("class","newClass"));

//Style -> access style attributes
//css -: background-color then in JS it would be backgroundColor 

let s = document.querySelector("div");
console.dir(s.style);
s.style.backgroundColor = "green";
//s.style.visibility = "hidden";


//creating elements through JS
let btn = document.createElement("button");
btn.innerText = "click Me";
console.log(btn); 

let divv = document.querySelector("div");
divv.append(btn); //append an element at end
divv.prepend(btn); // append at begining (start of node [inside])
divv.before(btn); //adds before the node (outside)
divv.after(btn); //adds after the node (outside)

//another e.g.
let pp = document.createElement("p");
pp.innerHTML = "Helloooooo";
document.querySelector("body").prepend(pp);


//delete Element

let p2 = document.querySelector("p");
p2.remove();


