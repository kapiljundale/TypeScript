// Grade calculator 
// prompt use for getting value.
// math, physics , chem numeric type 
// calculate average of these three subject 
// divide result by three . 
// once you have average 
// you can use if else lader for grade .
// if avrage < 70 then C grade 
// if avarage  > 70 < 90 B grade 
// if avarage  > 90 A grade



var gradeCalculator = (num1:number, num2:number,num3:number) => {
    console.log(`Maths Marks = ${num1}`);
    console.log(`Physics Marks = ${num2}`);
    console.log(`Chemistry Marks = ${num3}`);
    var num4:number = (num1 + num2 + num3)/3
    console.log(`Average of Marks = ${num4}`);
    if(num4<=70){
        console.log("Grade is C");
    }else if(num4>=70 && num4<=90){
        console.log("Grade is B");
    }else if(num4>=90){
        console.log("Grade is A");
    }
}

gradeCalculator(62,76,88);


