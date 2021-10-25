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
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(name))
        this._name=name
        else throw 'Name is Incorrect';
    }
    
    //method
    toString()
    {
    return "id ="+this.id+"  Name ="+this.name+"  Salary ="+this.salary+"  Gender ="+this.gender+"  Start Date= "+this.statrDate;
    }
} 
try{
let EmployeeObj1=new EmployeePayRoll(1,"Varun",123456,"M","2021-01-01");
console.log("Employee Details :"+EmployeeObj1)
EmployeeObj1.name="abc"
console.log(" updated Employee Details :"+EmployeeObj1)
}catch(ex){
    console.error(ex);
}
let EmployeeObj2=new EmployeePayRoll(2,"Sakshi",517539,"F","2020-01-01");
console.log("Employee Details :"+EmployeeObj2)