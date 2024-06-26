//create a function using the function keyword that takes string as an arguement & returns the number of vowels in the string.

function vowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    } else if (
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    ) {
      count++;
    }
  }
  return count;
}

let num = vowels("Apple");
console.log("The number of vowels are : " + num);

//create an arrow function to perform the same task.

const Vowel = (str) => {
  let count = 0;

  for (let string of str) {
    if (
      string === "a" ||
      string === "e" ||
      string === "i" ||
      string === "o" ||
      string === "u"
    )
      count++;
  }

  return count;
};

console.log("The number of vowels in Bogoman is : ", Vowel("Bogoman"));


//For a given array of numbers, print the square of each value using forEach Loop

let arr = [1,2,3,4,5];

arr.forEach((var1) =>{
console.log(var1 * var1);
});


//we are given array of marks of students.filter out the marks of the student that scored 90.

let array = [97,87,90,91,93,80];

let store = array.filter((value) =>{
   return (value >= 90);
});

console.log(store);


//Take a number n as input from user.Create an array of numbers 1 to n. use reduce method to calculate the sum and product of all numbers in the array.

let n = prompt("Enter a number : ");
let arr1 = [];

for(let i=1; i<=n ;i++)
{
    arr1[i-1] = i;
}

let sum = arr1.reduce((res,curr) =>
{
    return res + curr;
});
console.log("the sum is : " + sum);



let factorial = arr1.reduce((res,curr) =>
{
   return res * curr;
});
console.log("The factorial is : " + factorial);