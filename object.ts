var emp = {
    name: "kapil",
    score:200
}

console.log(emp.name);

//for-of=>object in javaScript is not iterable by defult , for of loop does not work on object
//for-of=> work with string and array but not with object
// for (const em of emp) {
    
// }

//for-In
for (const em in emp) {
   console.log(em);
   console.log(emp[em]);
   
}

//Array

var course:any = ["Angular","ReactJs",".NET"];
course.push("java");
course.push(10);

for (let index = 0; index < course.length; index++) {
    const element = course[index];
    console.log(element);
  
}

//De-structuring the array

var x = course[0];
var y = course[1];
console.log("----------------------------");

var [a, b, c] =course;
console.log(a);
console.log(b);
console.log(c);

console.log("=====================================");
//De-Structuring the object-rename the property name
var std = {
    firstName:"kapil",
    lastName:"Jundale"
}

var {firstName:userName, lastName:UserLastName} = std;
console.log(userName);


//Arrays Function/Method
//splice

var arr:number[] = [20,30,40,100,20,30,60];
arr.splice(2,3,88,99);
console.log(arr.toString());

console.log("-------------------------------------");


//function

function add (num1:number, num2:number){
    return num1 + num2;
}
console.log(add(10,20));

//optional parameter-
function display(id:number, name:string,role?:string){
    console.log("ID", id);
    console.log("NAme", name);
    if(role!=undefined){
        console.log("Role", role);
    }
    
}

console.log(display(1,"kapil"));

//default value in function
function display1(id:number, name:string,role:string = "Guest User"){
    console.log("ID", id);
    console.log("NAme", name);
    if(role!=undefined){
        console.log("Role", role);
    }
    
}

console.log(display1(1,"kapil","admin"));








