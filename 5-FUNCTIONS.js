// 1
// FUNCTIONS IN JS
// function defination : function functionName(param1,param2);
// function call : Function defination


function myFunction() //Function defination 
{
    console.log("Welcome to the World of Coding !!!!.");
}
myFunction();  //function call

function myFunction1(msg,msg1)
{
    //parameter -> input
    console.log(msg,msg1);
}
myFunction1("I love Learning Javascript",2); //arguement


//sum of two numbers

function sum(a,b)
{
   return (a + b);
}
console.log(`The sum is : ${sum(1,11)}`);

// 2
// ARROW FUNCTIONS IN JS
// => arrow function sign
// const functionName = (param1,param2...)=>{ }

const arrowsome = (a,b) => {
    return (a + b);
}

//Multiplication using arrow function

const Multiplication = (a,b) =>{
    return (a*b);
}
console.log("The Multiplication is : "+ Multiplication(2,3));


//  3
// For-Each Loop
//Used for Normal Calculation and Printing
// arr.forEach( callBackFunction )
// CallbackFunction : Here, it is a function to execute for each element in the array.
// callback is a function passed as an arguement to another function

let arr = [1,2,3,4,5,6];
arr.forEach(function printval(val)
{
    console.log(val);
}
);

arr.forEach((val)=>{
    console.log(val);
});

let arr1 = ["bkt","ktm","patan"];
arr1.forEach(function printval(val,idx,arr1)
{
    console.log(val.toUpperCase(),idx,arr1);
}
);

//Higher Order Functions -: use other function as parameter , or return function
//E.g. For-Each Function


// 4
//Some More Array Methods 

//Map : Creates a new array with the results of some operation. The value its callback returns are used to form new array

// use so that by using value creating a new array

// arr.map(callbackFnx(value,index,array))

let nums = [1,2,3,4];
let newArr = nums.map((val) => {
  return val * 2;
});
console.log(newArr);


//Filter : 
//creates a new array of elements that give true for a condition/filter.

let Numb = [1,2,3,4,5];

let Evenn = Numb.filter((val) =>{
 return val % 2 === 0;
});
console.log(Evenn);

// Reduce : Performs some operations & reduces the array to a single value. It returns that single value.
//large input single output

let array1 = [1,2,3,4];

const output = array1.reduce((res,curr) => {
    return res + curr;
});
console.log(output);

//return largest 
let array2 = [5,2,3,4];

const output1 = array1.reduce((prev,cur) => {
    return prev > cur ? prev : cur;
});
console.log(output1);
