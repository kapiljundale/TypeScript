//enum-is sequence of constant value-index value
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Female);
console.log(Gender.Male);
// console.log(Gender[1]);
// console.log(Gender[0]);
