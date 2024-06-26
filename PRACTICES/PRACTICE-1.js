alert("For pop up Messagee");
//prompt :  For message and also take input

//get user to input a number using prompt and check if it's a multiple pf 5 or not.

let value = prompt("Enter the value : ");

if(value % 5 == 0)
{
    console.log(value,"Multiple of 5");
}
else
{
    console.log(value," is NoT  a Multiple of 5");
}