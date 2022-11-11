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
var gradeCalculator = function (num1, num2, num3) {
    console.log("Maths Marks = ".concat(num1));
    console.log("Physics Marks = ".concat(num2));
    console.log("Chemistry Marks = ".concat(num3));
    var num4 = (num1 + num2 + num3) / 3;
    console.log("Average of Marks = ".concat(num4));
    if (num4 <= 70) {
        console.log("Grade is C");
    }
    else if (num4 >= 70 && num4 <= 90) {
        console.log("Grade is B");
    }
    else if (num4 >= 90) {
        console.log("Grade is A");
    }
};
gradeCalculator(62, 76, 88);
