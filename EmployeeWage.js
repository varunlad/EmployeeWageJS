//UC2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_Hours=4;
const FULL_TIME_Hours=8;
const RATE_PER_HOUR=100;
let empHours=0;
let EmployeeCheck=Math.floor(Math.random()*3);
switch(EmployeeCheck)
{
   case 1:
   empHours=PART_TIME_Hours; 
   console.log("UC 2 Employee is Present Part Time");
   break;
   case 2:
   empHours=FULL_TIME_Hours;
   console.log("UC 2 Employee is Present Full Time");
   break;
   default :
   empHours=0;
   console.log("Employee is Absent")
   break;    
}
let empWage=empHours*RATE_PER_HOUR;
console.log("UC 2 the Employee Wage of the day is :"+empWage);


