//UC2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_Hours=4;
const FULL_TIME_Hours=8;
const RATE_PER_HOUR=100;
const MAX_NUMBER_DAYS=20;
const MAX_HOURS=160;
let empHours=0;
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
let days=0;
let maxHours=0;
while(days<MAX_NUMBER_DAYS && empHours<=160)
{
let EmployeeCheck=Math.floor(Math.random()*3);
empHours+=getEmpHours(EmployeeCheck);
days=days+1;
}
let empWage=empHours*RATE_PER_HOUR;
console.log("UC 5 Total Employee Wage in  "+empHours +"Hours "+" Working for"+days+" days "+"is :"+empWage);


