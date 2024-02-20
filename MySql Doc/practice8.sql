-- HOW TO RETRIEVE/DISPLAY DATA FROM A TABLE
-- CRUD -- create - read/retrieve - update - delete

use company;
-- SELECT column1, column2, ... from tablename;
SELECT Fname, Lname, SALARY FROM employee;
select * from employee;

select * from company.employee;
select * from sportsschool.activitypick;
select * from employee where fname='Jennifer';
select * from employee where sex='f';
select * from employee where sex='f' and SALARY>25000;


-- display all employees who receive more than 30000 salary;
-- display all male employees who receive less than 30000 salary;
-- display all male and female employees who receive less than 30000 salary;

select * from employee where SALARY>30000;
select * from employee where sex='m' and SALARY<30000;
select * from employee where sex='m,f' and SALARY<30000;

-- skip rows

select * from employee limit 3;
select * from employee limit 3 offset 4;

-- sorting data in MySql
-- by default your data will be sorted by the primary key column in MySql
-- by default the sorting order will be in Ascending order 
-- from a-z or from lowest to the highest (ascending ordering)
-- ORDER BY - is used to sort data
select * from employee ORDER BY fname ASC;

select * from employee ORDER BY salary desc;

select * from employee ORDER BY fname ASC, lname ASC;

-- select an employee who is receiving highest salary
-- select an employee who is receiving  lowest salary
-- select top five employees who are receiving highest salary
-- select female employee who is receiving highest salary
-- select male employee who is receiving lowest salary

select * from employee;
SELECT * FROM Employee WHERE SALARY IS NOT NULL ORDER BY SALARY ASC LIMIT 1;
select * from employee order by SALARY desc limit 1;
select * from employee order by SALARY asc limit 1;
select * from employee order by SALARY desc limit 5;
select * from employee where sex='f' order by SALARY desc limit 1;
select * from employee where sex='m' order by SALARY asc limit 1;

-- select any employee whose fname is 'john', 'franklin', 'ahmad';
select * from employee where FNAME in ('john', 'franklin', 'ahmad');

---   Aggregate Functions

/* 
AVG(), MAX(), MIN(), SUM(), COUNT()
*/

select avg(salary) as 'Average salary' from employee;
select max(salary) as 'Max salary' from employee;
select min(salary) as 'Min salary' from employee;

select fname as 'first name', lname as 'last name' from employee;
select count(*) from employee;


[11:59 AM] Zakirullah Pardis
-- Display total number of employees
-- display maximum and minimum salary that you pay to your employee
-- display maximum, minimum salary for female employees
-- count how many male employees do you have in employee table
 

select count(*) from employee;
SELECT max(salary), min(salary) from employee;
SELECT max(salary), min(salary) from employee where sex='f';
select count(*) from employee where sex='m';

-- distinct 
-- removes the duplicate  data
-- display different salary you pay to your employee
select distinct salary from employee;



