   -- Display full Name of employee which has 'Rames' and the last character can be anything.
-- Select record of Employee who is born in 1965.
-- Display all employees who's first Name starts with A and ends with d.
-- Display all employees who's first Name start with J and does not ends with n.
-- display all employees who's first Name start with J and should be at least 5 characters -- Display full Name of employee which has 'Rames' and the last character can be anything.
-- Select record of Employee who is born in 1965.
-- Display all employees who's first Name starts with A and ends with d.
-- Display all employees who's first Name start with J and does not ends with n.
-- display all employees who's first Name start with J and should be at least 5 characters in lenght.
-- SELECT Employee who's full name start with 'Jennifer W';
-- Select an employee who's first name is 'Jennifer' but last name does not start with 'W'in lenght.
-- SELECT Employee who's full name start with 'Jennifer W';
-- Select an employee who's first name is 'Jennifer' but last name does not start with 'W'

USE Company;
SELECT * FROM Employee;
SELECT * FROM Employee WHERE FNAME LIKE 'Rames%';
SELECT * from employee WHERE YEAR(BDATE)=1965;
SELECT * FROM Employee WHERE FNAME LIKE 'a%d';
SELECT * FROM Employee WHERE fName LIKE 'J%' AND NOT fName LIKE '%N';
SELECT * FROM Employee WHERE FNAME LIKE 'j____';
/*SELECT * FROM Employee WHERE FNAME , LNAME LIKE 'Rames_';*/
select fname, lname as fullname from employee where fname like 'Rames_';
SELECT * from employee WHERE YEAR(BDATE)=1965;
SELECT * FROM Employee WHERE FNAME LIKE 'a%d';
SELECT * FROM Employee WHERE fName LIKE 'J%' AND NOT fName LIKE '%N';
SELECT * FROM Employee WHERE FNAME LIKE 'j____';
/*select fname, lname as fullname from employee where fname like 'Jennifer';*/
SELECT CONCAT (FNAME, ' ', LNAME) AS 'Full Name' FROM Employee WHERE fname like 'Jennifer';
SELECT * FROM Employee WHERE fName LIKE 'Jennifer' AND NOT fName LIKE 'w%';


---------------------------------------------------------------------------

-- select all information from the employee table and sort them by thier firstName? Erica

	select * from Employee order by fname;

-- select all employees who's name contain oh? Zeinab

	SELECT * FROM employee WHERE CONCAT(FNAME,' ',LNAME) LIKE '%oh%';

-- select all maximum, minimum, and average salary for all female and male employees seperately? Luqman

	select Sex, max(salary) as max_salary, min(salary) as min_salary, 

    avg(salary) as avg_salary from employee WHERE Salary is not null group by sex;
 
-- select all different salaries? Nikita

	SELECT DISTINCT Salary FROM employee;

-- select female employee who is receiving highest salary? Sam

SELECT * FROM employee

WHERE sex = 'f'

ORDER BY salary DESC

LIMIT 1;

-- display full name and salary of all employees and sort them by

	-- thier first and then last name from A to Z? Mihir

    SELECT CONCAT(FNAME,' ',LNAME) AS 'Employee', Salary FROM Employee 

		ORDER BY Fname ASC, lname ASC;

-- display all employees who's first Name start with J and should be 

	-- at least 5 characters in lenght? Fatinah

  SELECT * FROM Employee WHERE FNAME LIKE 'J____%';  
 
 