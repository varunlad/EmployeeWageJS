//UC2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_Hours=4;
const FULL_TIME_Hours=8;
const RATE_PER_HOUR=100;
let empHours=0;
let EmployeeCheck=Math.floor(Math.random()*3);
function getEmpHours(EmployeeCheck)
{
switch(EmployeeCheck)
{
   case 1:
   return PART_TIME_Hours;
   case 2:
   return FULL_TIME_Hours;
   default :
   return 0;
}
}
empHours=getEmpHours(EmployeeCheck);
let empWage=empHours*RATE_PER_HOUR;
console.log("UC 3 the Employee Wage of the day is :"+empWage);


