//String

let message:string = "hello TypeScrript";
console.log(message)


//Number
let age:number=25;
console.log(age)


//boolean

let isLoggedIn:boolean=true;
console.log(isLoggedIn);


//any
//The any type disables type checking. You can assign any kind of value. It’s not recommended unless you have no choice.
let data:any="Hello";
data=5;
data=true;

//unknown
//Similar to any, but safer. TypeScript forces you to check its type before using it.
let input:unknown="some data";


//void
//The void type: means the function does not return any value.
function greet():void{
    console.log("HEllo!")
}

//never
//A function that never returns (usually because it throws an error or has an infinite loop).

function  throwError():never{
    throw new Error("Something went wrong")
}

//Type Interface
let city="Kathmandu"