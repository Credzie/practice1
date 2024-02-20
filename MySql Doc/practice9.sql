-- ----------!Recap
USE Company;
-- 1. To find How many records are in Employee table. -- Erica
	SELECT  COUNT(*) FROM Company.Employee;
-- 2. To find the minimum salary an employee is receiving. --  Tanzina
	SELECT MIN(Salary) FROM Employee WHERE Salary IS NOT NULL;
-- 3. To find the total of all salaries in Employee table. -- James
	SELECT SUM(salary) AS total_salary FROM employee;
-- 4. To find the total of salary for those Employees who's SEX is M. -- Jason
	SELECT SUM(Salary) FROM Employee WHERE SEX='M';
-- 5. To find minimum and maximum salary in Employee table. -- Nikita
	SELECT MIN(Salary) AS 'Min Salary', MAX(Salary) AS 'Max Salary' FROM Employee;
-- 6. To find all the employees sort it from lowest to highest salary. -- Robert
	SELECT * FROM Employee ORDER BY Salary ASC;
-- 7. To find all the employee ordered by Sex and then by first Name. -- Fatinah
	SELECT * FROM Employee ORDER BY SEX ASC, Fname ASC;
-- 8. To find the first two employees. -- Fisayo
	SELECT * FROM Employee LIMIT 2;
-- 9. To find the first Name and Last Name for all employee. -- Nirmala
	SELECT Fname, Lname FROM Employee;
-- 10. To find all the different Salary from the Employee tables. -- Johanna
	SELECT DISTINCT Salary FROM Employee;
  -- ------------------------------------------------  
--  -- ------- BETWEEN operator  ---------------------------
/* selects values within a given range. The values can be numbers, text, or 
dates. The BETWEEN operator is inclusive: begin and end values are included */
select * from employee;
select * from employee where salary between 25000 and 40000;
-- display all employee who receive salary between 25000 and 40000
select * from employee where salary > 2500 and salary < 40000;

-- --- GROUP BY ------------------------------------------------------------------------

	-- groups rows that have the same values into summary rows

-- How many employees are working in each department

	-- Group based on the same department

-- How many male and female employees are working in your organization

SELECT COUNT(*) AS 'Num of Employees', SEX FROM Employee 

	WHERE SEX IS NOT NULL GROUP BY SEX;

    select * from Employee;
    
    -- Display all employeess who are borne on/between 1960-01-01 and 1980-01-01;
-- Display all employeess who are not borne on/between 1960-01-01 and 1980-01-01;
-- Display all salaries and number of employees who are receiving that salary.
-- Write a query which select highest salary for each gender
-- Display total amount of salaries for both male and female employees.

select * from employee where bdate between '1960-01-01' and '1980-01-01';
select * from employee where bdate < '1960-01-01' or bdate > '1980-01-01';
select count(salary) from employee;
select * from employee where sex = 'm'or'f' order by salary desc; 
select sum(salary) from employee where sex = 'm' or 'f';

-- Display all employeess who are borned on/between 1960 and 1980;
	SELECT * FROM Employee WHERE BDATE BETWEEN '1960-01-01' AND '1980-01-01';
    SELECT * FROM Employee WHERE YEAR(BDATE) BETWEEN 1960 AND 1980;
-- Display all employeess who are not borned on/between 1960-01-01 and 1980-01-01;
SELECT * FROM Employee WHERE YEAR(BDATE) NOT BETWEEN 1960 AND 1980;
-- Display all salaries and number of employees who are receiving that salary.
	SELECT COUNT(*), SALARY FROM Employee WHERE SALARY IS NOT NULL GROUP BY SALARY;
-- Write a query which select highest salary for each gender
	SELECT MAX(SALARY), SEX FROM Employee WHERE SEX IS NOT NULL GROUP BY SEX;
-- Display total amount of salaries for both male and female employees.
    SELECT SUM(SALARY), SEX FROM Employee WHERE SEX IS NOT NULL GROUP BY SEX;
    
    -- SELECT all the Employees whose Name start with 'J'  
SELECT * FROM Employee WHERE FNAME LIKE 'J%';
SELECT * FROM Employee WHERE FNAME LIKE 'J%n';
 
SELECT * FROM Employee WHERE FNAME LIKE 'j____%';

select fname, lname from employee;
-- full name of employee
-- concat() -- concatente two or more columns

-- full name of employee
-- CONCAT() -- concatenate two or more columns
 
SELECT CONCAT(FNAME,' ',LNAME) AS 'Employee', Salary FROM Employee;
SELECT CONCAT(FNAME,' ',LNAME) AS 'Employee', CONCAT('£ ',Salary,' Per year') AS 'Salary'
	FROM Employee;
    
 
    