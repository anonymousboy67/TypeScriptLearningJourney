function greet(name:string):string{
    return "Hello, "+ name;
}

console.log(greet("Aashish"));

//greet is a function that takes a parameter name which must be of type string.
//It returns a string, so we add : string after the parameter list.
//Inside the function, we return "Hello, " followed by the name.
//console.log(greet("Aashish")) prints: Hello, Aashish.



//Multiple Paramter

function add(x:number, y:number):number{
    return x+y;
}

console.log(add(10,5))

//We define a function add with two parameters of type number, and it returns their sum, which is also a number.



//Optional Parameter


function greetUser(name:string, age?:number):string{
    return age? `${name} is ${age} years old.`: `${name} has no age info .`;
}

console.log(greetUser("Sam"));
console.log(greetUser("Sam", 30));

//Adding ? makes a parameter optional.
//Here, age might be undefined, so we check before using it.



//Default Parameters

function welcome(user:string="Guest"):string{
    return `Welcome, ${user}`;
}

console.log(welcome());
console.log(welcome("Aashish"))

//If no value is passed for user, it defaults to "Guest".



//Return Type Inference
function square(num:number){
    return num * num; 
}


//Arrow functions

const multiply=(a:number, b:number):number=>{
    return a*b;
}

console.log(multiply(3,4));


//Function Type as a Vaiable

let divide:(x:number, y:number)=>number;
divide=function(x,y){
    return x/y;
}

