
class Student {
    private name:string;
    private rollNo:number;

    public setData(name:string, rollNo:number) {
        this.name = name;
        this.rollNo = rollNo;
    }

    public getName() {
        return this.name
    }

    public getRollNumber() {
        return this.rollNo
    }
}


const s = new Student();
s.setData('Srigin', 25);

console.log("Student Name: " + s.getName() + " " + "Roll Number: " + s.getRollNumber()); 


