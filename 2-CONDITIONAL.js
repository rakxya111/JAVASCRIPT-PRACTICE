//CONDITIONAL STATEMENTS

//if statement
let a = 25;

if(a > 18)
{
    console.log("Can Vote");
}
if(a < 18)
{
    console.log("Can't Vote");
}

//if-else statement
let mode = "light";
let color;

if(mode == "light")
{
    color = "white";
}
else
{
    color = "black";
}
console.log(color);
 
//else-if statement
let age = 18;

if(age < 18)
{
    console.log("Junior");
}
else if(age > 60)
{
    console.log("Senior");
}
else
{
    console.log("middle");
}

//TERNARY OPERATORS IN JS
// condition ? true o/p : false o/p
//for small statements[compact if-else]

let year = 18;
let value = year >= 18 ? "adult" : "kiddo";
console.log(value);

//SWITCH IN JS

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}