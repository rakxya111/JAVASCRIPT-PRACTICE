//STRINGS
let str = "Rakshya Bhuju";
let str1 = 'Bhujuu';

//inbuilt functions are called METHODS.
console.log(str1.length);
console.log(str1[0]);
document.write(str.length);

//Template Literal
let specialString = `hello my name is rakshya.`;
console.log(specialString);
console.log(typeof(specialString));

console.log("Hello \n World");
console.log("Hello \t World"); 


//STRING METHODS IN JS
// -> Built-in function to manipulate a string
//str.toUpperCase() , str.LowerCase(),str.trim() ->remove whitespaces from starting & end 
//str.slice(start,end?) ->returns part of string , str.concat(str1) -> joins  str1 with str , str.replace(searchVal,newVal) , str.CharAt(idx)
//strings are immutable is JS

let strin = "     Bhanu College JS   ";

//str.toUpperCase()
strin = strin.toUpperCase();
console.log(strin);

//str.LowerCase()
strin = strin.toLowerCase();
console.log(strin);

//str.trim()
strin = strin.trim();
console.log(strin);

//str.slice(start,end?)

let val = "0123456";
console.log(val.slice(1,5));
console.log(val.slice(3));

// str.concat(str1)

let val1 = "Hello" , val2 = "World";
let val3 = val1.concat(val2);
console.log(val3);
val3 = "i am learning to code " + val1 + val2;
console.log(val3);

//str.replace(searchVal,newVal)

console.log(val1.replace("H","Y")); //only replace one value with H.
console.log(val1.replaceAll("H","Y")); // this would replace all value with H to Y.

//str.CharAt(idx) -> in which index what value exists checkingg

let volvo = "ILoveJS";
console.log(str.charAt(3));




  

