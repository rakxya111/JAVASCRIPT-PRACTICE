let a = 6, b = 2;

// Arithmetic Operators in JS
// ** means ^ [power]

console.log(" a is ",a ," b is",b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b); 

// Unary Operator 
// a++[post increment],++a[pre-increment],a--[post-decrement],--a[pre-decrement]

a++;
console.log(a);
a--;
console.log(a);


//Assignment Operator
// = , +=,-=,*=, %=,**=

a += 4;
console.log(a);

a -= 6;
console.log(a);

a *= 4;
console.log(a);

a /= 4;
console.log(a);

a %= 4;
console.log(a);

a **= 4; //a ko power 4
console.log(a);

// Comparison Operators
// == , ===[equal to & type , strict version which also checks the data type] , != , !== [not equal to and type]
//>, >=,<,<= [gives BOOlean value i.e. true or false]
console.log("a == b", a == b);
console.log("a != b", a != b);
console.log("a <= b", a <= b);
console.log("a >= b", a >= b);
console.log("a > b", a > b);
console.log("a < b", a < b);
console.log("a === b", a === b);
console.log("a !== b", a !== b);

//LOGICAL OPERATORS
// &&, || , ![prints opposite]

let cond1 = a > b;
let cond2 = a == 6;
console.log("cond1 && cond2 = ",cond1 && cond2);
console.log("!(cond1 > cond2) = ",!(cond1 > cond2));
l












