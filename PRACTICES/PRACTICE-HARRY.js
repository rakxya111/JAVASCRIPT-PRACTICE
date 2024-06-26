
let h = document.getElementById("bt1");
h.addEventListener('click',function(){
window.location = "https://www.google.com"; 
});

let h1 = document.getElementById("bt2");
let a = (()=>{
window.location = "https://www.youtube.com";
});
h1.addEventListener('click',a);

let h2 = document.getElementById("bt3");
h2.addEventListener('click',function(){
window.location = "https://www.instagram.com";
});



console.log( val.innerHTML);
val.innerHTML = val.innerHTML +  "Hi bye";
console.log(val.outerHTML);
console.log(val.textContent);
val.textContent = "WHYYYY";
val.hidden = true;
console.log(val.hasAttribute('id')); 
console.log(val.hasAttribute('class'));
let aa = val.getAttribute("data-rakshya");
console.log(aa);
val.setAttribute("class","hello");
val.removeAttribute("class");
console.log(val.attributes);

let div = document.createElement('div');
div.className = 'first';
div.innerHTML = "<span> hellooo </span>";
//document.body.prepend(div);
val.before(div);
let val = document.getElementById("first");
val.insertAdjacentElement('beforebegin');
val.insertAdjacentElement('afterbegin');
 val.insertAdjacentElement('beforeend');
val.insertAdjacentHTML('afterend',"<div>hello133</div>");
val.classList.add("c1");
val.classList.toggle("c1");


//regExp()
// Syntax : var patt=new RegExp(pattern,modifiers);

let pattern = "hey what es up";
let patt1 = /e/ig; // i->case-insensitive g->global
document.write(pattern.match(patt1));

let pat = new RegExp('free');
let value = "Hello wolf free";
document.write(pat.exec(value)); //returns the text of the found value.
document.write(pat.test(value)); //returns true or false

