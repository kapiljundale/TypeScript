var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee1 = /** @class */ (function () {
    function Employee1() {
    }
    Employee1.prototype.Print = function () {
        console.log("Employee details");
    };
    return Employee1;
}());
var Manger1 = /** @class */ (function (_super) {
    __extends(Manger1, _super);
    // constructor 
    function Manger1(firstName, lastName, designation) {
        var _this = 
        // calling parent class constructor.
        _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    // overriding parent class print method .
    Manger1.prototype.Print = function () {
        _super.prototype.Print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return Manger1;
}(Employee1));
var Lead1 = /** @class */ (function (_super) {
    __extends(Lead1, _super);
    // constructor 
    function Lead1(firstName, lastName, designation) {
        var _this = 
        // calling parent class constructor.
        _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    // overriding parent class print method .
    Lead1.prototype.Print = function () {
        _super.prototype.Print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return Lead1;
}(Employee1));
var Developer1 = /** @class */ (function (_super) {
    __extends(Developer1, _super);
    // constructor 
    function Developer1(firstName, lastName, designation) {
        var _this = 
        // calling parent class constructor.
        _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    // overriding parent class print method .
    Developer1.prototype.Print = function () {
        _super.prototype.Print.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " - ").concat(this.designation));
    };
    return Developer1;
}(Employee1));
var employees1 = new Array(new Manger1("Jack", "Sparrow", "Manger"), new Lead1("Sumit", "Pande", "Lead"), new Developer1("Dnyanesh", "Surya", "Developer"));
for (var _i = 0, employees1_1 = employees1; _i < employees1_1.length; _i++) {
    var emp = employees1_1[_i];
    emp.Print();
}
