let marks = [97,27,37,47];
console.log(marks);
console.log(marks.length);


//Looping Over an Array

for(let i = 0;i < (marks.length);i++)
{
    document.write(marks[i] + "<br>");
}

//for of loop 

for (let mark of marks)
{
    console.log(mark);
}

let cities = ["kathmandu","Bhaktapur","Laltipur"];

for(let city of cities)
{
    console.log(city.toUpperCase);
}

//ARRAYS METHODS IN JS

// push() : add to end
// pop() : delete from end & return
// toString() : converts array to  string.
// concat() : Joins multiple arrays & returns result.
// unshift () : add to start
// shift () : delete from start & return.
// slice () : returns a piece of the array
// splice () : change original array (add,remove,replace)


let food = ["Apple","Banana","Tomato"];

// push() : add to end
food.push("Chips","Water","Juice"); 
document.write(food);

// pop() : delete from end & return
let deleteitem = food.pop();
document.write("<br>",food);
document.write("<br> Deleted Item is : ",deleteitem);

// toString() : converts array to  string.
console.log(food.toString());
console.log(food);

// concat() : Joins multiple arrays & returns result.
let marvel = ["Ironman","Spiderman","Captain-America"];
let dc = ["Batman","Superman","AquaMan"];
let india = ["Shaktiman","Krish"];
let Heros = marvel.concat(dc,india);
console.log(Heros);

// unshift () : add to start
let add = marvel.unshift("Antman");
console.log(marvel);

// shift () : delete from start & return.
let val = marvel.shift();
console.log(marvel);
console.log("Deleted Value is : " + val);

// slice () : returns a piece of the array

let world = ["Ironman","Spiderman","Captain-America" , "Doctor-Strange","Thor"];
console.log(world);
let slicee = world.slice(1,4);
console.log(slicee);

// splice () : change original array (add,remove,replace)
// SYNTAX : splice(start-Index,del-Count,new-Element);

let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
console.log(arr);
//add element
arr.splice(2,0,100);
console.log(arr);
//delete element
arr.splice(3,1);
//Replace Element
arr.splice(3,1,101);