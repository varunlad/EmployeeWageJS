//UC2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_Hours=4;
const FULL_TIME_Hours=8;
const RATE_PER_HOUR=100;
const MAX_NUMBER_DAYS=20;
const MAX_HOURS=160;
let totalEmpHours=0;
let empHours=0;
let empDailyWageArr=new Array();
function CalculateDailyWage(empHours)
{
   return empHours*RATE_PER_HOUR
}
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
days=days+1;
let EmployeeCheck=Math.floor(Math.random()*10)%3;
empHours=getEmpHours(EmployeeCheck);
totalEmpHours+=empHours;
empDailyWageArr.push(CalculateDailyWage(empHours))
}
let empWage=CalculateDailyWage(totalEmpHours)
console.log("UC 6 Total Employee Wage in  "+totalEmpHours +"Hours "+" Working for"+days+" days "+"is :"+empWage);


