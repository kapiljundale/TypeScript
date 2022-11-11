//function overloading-->
//it is mechanism or ability to creat multiple method
//with the same name with different parameters--> compile time polymorphism
// we achive in same class

//function overriding-->
//we can achive by using parent and child classs.

//calculator Objcalculator = new calculator();
//Objcalculator==>instance /object


//code 
function doubleMe1(x:number); // declaration 
function doubleMe1(y:string); // function declaration
function doubleMe1(arr:string[]);


function doubleMe1(x:any) { // function implementation
// checking input parameter as number or not
if(x && typeof x === "number")
{
    console.log(x*2);
}
// checking input para as string or not
else if(x && typeof x === "string")
{
    console.log(x + " "+ x);
} 
else if (Array.isArray(x))
{
  return x.map(name => console.log(name + " " + name))
}
}

doubleMe1(2); // calling the function 
doubleMe1("John");
doubleMe1(["Codemind", "test"]);


//Rest parameter-
var product = function (...nums) 
{
    var result = 1 ;
    for(var i = 0; i < nums.length; i++)
    {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
}

console.log(product(2,3,4,5));

//arrow function
var hello = (name:string):string=> {
    return "Hello" + name;
};

console.log(hello("AngularBatch4"));

var multiply = (num1:number, num2:number):number=> {
    return num1 * num2;
}

console.log(multiply(2,7));


//veriable prefixes: var, let, const




