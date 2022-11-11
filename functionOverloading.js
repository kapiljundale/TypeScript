//function overloading-->
//it is mechanism or ability to creat multiple method
//with the same name with different parameters--> compile time polymorphism
// we achive in same class
function doubleMe(x) {
    // checking input parameter as number or not
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    // checking input para as string or not
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(name + " " + name); });
    }
}
doubleMe(2); // calling the function 
doubleMe("John");
doubleMe(["Codemind", "test"]);
//Rest parameter-
var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
};
console.log(product(2, 3, 4, 5));
//arrow function
var hello = function (name) {
    return "Hello" + name;
};
console.log(hello("AngularBatch4"));
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(2, 7));
