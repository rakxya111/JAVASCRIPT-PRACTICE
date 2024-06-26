//FOR LOOP

for(let a = 1; a<=5 ;a++)
{
    console.log(a,"Hamro College");
}

//INFINITE LOOP -> (loop that never ends.)


//WHILE LOOP 

let i;
while(i< 10)
{
    console.log(i,"hello");
    i++;
}

//DO-WHILE LOOP -> run atleast once even if condition isn't true.

let j;
do{
    console.log(j,"hello jii");
    j++;
}while(j<6);


//FOR-OF LOOP -> let us put loops over arrays and strings.

//syntax:
// for(let val of strVar){ }

let str = "Rakshya";
let size = 0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("SIze of string is : ",size);

//FOR-IN-LOOP -> Used for objects.
//syntax:
// for(let key in objVar){ }

let student = {
    Fname : "Rakshya",
    roll : 20,
    cgpa : 7.5,
    isPass : true
};

for(let i in student)
{
    console.log(i,"value is :",student[i]);
}


