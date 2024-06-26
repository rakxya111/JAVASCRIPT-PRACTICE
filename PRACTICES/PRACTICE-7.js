let btn = document.createElement("Button");
btn.innerText = "Click Me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.querySelector("body").prepend(btn);


//ques-2
let para = document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.classList);
console.log(para.classList.add("newClass"));
//console.log(para.classList.remove("newClass"));

