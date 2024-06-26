//finding average marks of the entire class from given array with marks of students ->[85,97,44,37,76,60]

let marks = [85,97,44,37,76,60];
let sum = 0,average;

for(let value of marks)
{
    sum += value ;
}
average = sum/marks.length;

//ways to print in JS 
console.log(`The average marks of the whole class is ${average}`);
console.log("The average marks of the whole class is " + average);
console.log("The average marks of the whole class is ",average);


//for a given array with prices -> [250,645,300,900,50] all items have and offer of 10% on them change the array to store final price after applying the offer.


let items = [250,645,300,900,50];

for(let i = 0 ; i < items.length ; i++)
{
  let final = items[i] * 0.1 ;
  items[i] -= final;
}
document.write(items);

//create an array to store companies and remove the first company from array, rmeove uber and add ota in its place & add amazon at the end.

let company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

company.shift();
company.splice(1,1,"Ola");
company.push("Amazon");



