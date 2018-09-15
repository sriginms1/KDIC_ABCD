var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setData = function (name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getRollNumber = function () {
        return this.rollNo;
    };
    return Student;
}());
var s = new Student();
s.setData('Srigin', 25);
console.log("Student Name: " + s.getName() + " " + "Roll Number: " + s.getRollNumber());
