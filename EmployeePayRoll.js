class EmployeePayRoll
{
    //properties
    id;
    salary;
    gender;
    statrDate;

    //Constructor
    constructor(...params)
    {
        this.id=params[0];
        this._name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.statrDate=params[4];
    }

    //Getter and Setter Method
    get name(){return this._name}
    set name(name){this._name=name}
    
    //method
    toString()
    {
    return "id ="+this.id+"  Name ="+this.name+"  Salary ="+this.salary+"  Gender ="+this.gender+"  Start Date= "+this.statrDate;
    }
} 
let EmployeeObj1=new EmployeePayRoll(1,"varun",123456,"M","2021-01-01");
let EmployeeObj2=new EmployeePayRoll(2,"sakshi",517539,"F","2020-01-01");

console.log("Employee Details :"+EmployeeObj1.toString())
console.log("Employee Details :"+EmployeeObj2.toString())
EmployeeObj2.name="ABC"
console.log(" updated Employee Details :"+EmployeeObj2.toString())