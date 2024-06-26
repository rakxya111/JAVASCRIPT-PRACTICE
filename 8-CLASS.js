
// CLASS:


class railwayStation
{
submit()
{
alert(this.name + ":Your form is Submitted. for train number." + this.trainno);
} 

cancel()
{
alert(this.name + ":Your Form is Cancelled for train number" + this.trainno);
}

fill(givenname,trainno)
{
this.name = givenname;
this.trainno = trainno;
}
}

let harryForm1 = new railwayStation();
harryForm1.fill("Harry",1111);
let rakshyaForm1 = new railwayStation();
rakshyaForm1.fill("Rakshya",1010);

harryForm1.submit();
rakshyaForm1.cancel();




//CONSTRUCTOR:

class railwayStation
{

constructor(givenname,trainno)
{
    this.name = givenname;
    this.trainno = trainno;   
}
submit()
{
alert(this.name + ":Your form is Submitted. for train number." + this.trainno);
} 

cancel()
{
alert(this.name + ":Your Form is Cancelled for train number" + this.trainno);
}
}

let harryForm = new railwayStation("Harry",1111);
let rakshyaForm = new railwayStation("Rakshya",1010);
harryForm.submit();
rakshyaForm.cancel();



//INHERITANCE -> KEYWORD : extends

class Animal{
    
    constructor(name1,color)
    {
        this.name1 = name1;
        this.color = color;
    }

    bark()
    {
        console.log(this.name1 + ": is Barking with color :" + this.color);
    }
}

class Dog extends Animal{
Protect()
{
    console.log(this.name1 + ": is Protects us with color :" + this.color); 
}
}
let an = new Animal("Bruno","Brown");
an.bark();
let dd = new Dog("Catty","White");
dd.bark();
dd.Protect();


//METHOD - OVERRIDING -> keyword : Super 

class Employee
{
    constructor(name)
    {
       console.log(`${name} - Employee's constructor is here`);
       this.name = name;
    }
    login()
    {
    console.log(`Employee has logged in`);    
    }
    logout() 
    {
    console.log(`Employee has logged out`);
    }

    requestLeaves(leaves) 
    {
    console.log(`Employee has requested ${leaves} leaves - Auto approved`);
      }
}

class Programmer extends Employee
{
constructor(name) 
{
super(name);
console.log(`This is a newly written constructor`);
}

requestCoffee(x) 
{
console.log(`Employee has requested ${x} coffees`);
  }
requestLeaves(leaves) 
{
super.requestLeaves(4)
console.log("One extra is granted")
}

}

let e = new Programmer("Harry");
e.login();
e.requestLeaves(3);


//STATIC METHOD IN JS

class Animal
{
constructor(name)
{
    this.name = Animal.capitalize(name);
}

walk()
{
console.log("Animal " + this.name + " is walking.");
}

static capitalize(name)
{
return name.charAt(0).toUpperCase() + name.substr(1,name.length);
}
}

let j = new Animal("tommy");
j.walk();


//GETTERS , SETTERS & INSTANCE OF OPERATOR

class ANimal 
{
    constructor (name)
    {
        this._name = name;
    }

    fly()
    {
     alert("Mai Udd raha huu.");
    }

    get name()
    {
        return this._name;
    }

    set name(newname)
    {
        this._name = newname;
    }


}

class Rabbit extends ANimal
{
 carrot()
 {
    console.log("Eating Carrot");
 }
}

let a = new Rabbit("Brunoo");
let b = new ANimal("Brunoo");
a.fly();
console.log(a.name);
a.name = "Shin-Haaarii";
console.log(a.name);
let c = 90;

//instanceOf -> to check wheather the particular instance belongs to that class or not.

console.log(a instanceof ANimal); //true
console.log(b instanceof ANimal); //true
console.log(c instanceof ANimal); //false

