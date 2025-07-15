// Union types let a variable hold more than one type.
// We use the | symbol to separate types.


let value:string | number;


value:"Aashish";
value:123;
value=true; //Error 'boolean is not assignable


// value can hold either a string or a number.
// It cannot be assigned a boolean, because it's not one of the allowed types.


//Function with Union Types

function printId(id:string | number):void{
    console.log("Your ID is " +id);
}

printId("ABCD123");
printId(456);



function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); 
  } else {
    console.log(value.toFixed(2));  
  }
}
// Here, typeof is used to narrow the type.
// This is called Type Narrowing,



//Union in Arrays
let data:(string | number)[]=["hello", 123, "world", 456]