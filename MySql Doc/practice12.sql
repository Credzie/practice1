-- SUBSTR - extract text from a string 
select substr('ZakPardis',1,3);
-- ouput will give - 'Zak'

------------ Having---------------------------
-- where is used to filter data -- to filter each row, search through each row
-- Having - filter through a group
-- when we have aggregate functions in condition we should use 'Having' 

-- display a gender and number of employee for that specifc gender if they are more than 3
select Sex, count(*) AS 'No of Emp' from employee
where sex is not null group by sex having count(*)>3;

use company;
-- display a gender and total amount of salary for a gender where you have less than 4 employess for that specific gender
select * from employee;
select sex, sum(salary) AS 'Total Salary', count(*) from employee group by sex having count(*)<4;

-- Display daprtment name where more than 3 employees working in that department.
select * from department;
select dname, count(*) AS 'NUmber of Employees' FROM department inner join employee on employee.dno=department.Dnumber group by dname having count(*)>3;

-- CASE Epression ---

-- Case syntax 
-- Case 
--     WHEN condition THEN result1
--     WHEN Condition THEN result2
---    else -- default result---;
--     END as Alias
--     from table_name
-- increase salary of employee based on their salary range

select fname, lname, salary, 
case 
    /*when salary>15000 then salary*0.1+salary*/
    when salary=25000 then salary+2000
    when salary=30000 then salary+3000
    when salary=40000 then salary+4000
    when salary between 40000 and 49000 then salary+4500
	else 'Not eligible for bonus'
    end as 'Salary with bonus'
    from Employee;
    
select fname, lname, salary,
case 
		when salary < 30000 then 
        case 
        when salary=25000 then salary+2000
        else 'Not Eligible'
        end
        when salary>30000 then salary+4000
        end as 'Salary with bonus'
        from employee;

/*

Write a case expression that returns employee's full name salary with bonus as below:

	if salary is 1000 - 19000 increase salary by 1000

	if salary is 20000 - 29000 increase 2000

	if salary is 30000 - 39000 increase 3000

	if salary is 40000 - 49000 increase 4000

	if salary is 50000 - 59000 increase 5000

	if a person receive no salary then should display 'Not eligible for bonus'

*/

SELECT CONCAT(FNAME, ' ', LNAME) AS 'Full Name',

    CASE

        WHEN SALARY BETWEEN 1000 AND 19000 THEN SALARY + 1000

        WHEN SALARY BETWEEN 20000 AND 29000 THEN SALARY + 2000

        WHEN SALARY BETWEEN 30000 AND 39000 THEN SALARY + 3000

        WHEN SALARY BETWEEN 40000 AND 49000 THEN SALARY + 4000

        WHEN SALARY BETWEEN 50000 AND 59000 THEN SALARY + 5000

        WHEN SALARY IS NULL THEN 'Not eligible for bonus'

        ELSE SALARY  -- If none of the above conditions match, return the original salary

    END AS 'Updated Salary'

FROM EMPLOYEE;

-------------------------------------------------------------------------------------
----
----------- Delimiter ------------------------

DELIMITER $$$
CREATE PROCEDURE employeeRecord(IN firstName VARCHAR(20))	
BEGIN
	SELECT * FROM Employee WHERE FNAME=firstName;
END$$$
 
CALL employeeRecord('John');
 
DELIMITER &&&
CREATE PROCEDURE CaseExpression()
	BEGIN
		SELECT FNAME, LNAME, SALARY,
			CASE
				WHEN SALARY=25000 THEN SALARY*0.1+SALARY
				WHEN SALARY=30000 THEN SALARY+3000
				WHEN SALARY BETWEEN 40000 AND 49000 THEN SALARY+4000
				WHEN SALARY IS NULL THEN 10000
				ELSE 'Not Eligible for Bonus'
			END AS 'Salary with Bonus'
		FROM Employee;
	END&&&
 
CALL CaseExpression();        
        
 DELIMITER $$
CREATE PROCEDURE TotalSalary()
BEGIN
    SELECT SUM(salary) AS 'Total Salary' FROM employee WHERE sex IN ('m', 'f');
END$$       
 
 call TotalSalary('m');

    
     -- Create stored procedure which will display the total amount of salaries for any gender
	-- that you are passing as argument
    
DELIMITER $$
create procedure TotalSalary(IN gender CHAR(1))
BEGIN
SELECT sum(salary) AS 'Total Salary' 
FROM employee where sex=gender;
END$$

call TotalSalary('m');

-- -- Create stored procedure which will display all employees of a department which
	-- you are passing as argument
  DELIMITER $$
  CREATE PROCEDURE employees( IN department VARCHAR(20))
  BEGIN 
  SELECT e.FNAME, e.LNAME, d.DNAME FROM employee INNER JOIN Department ON d.DNUMBER=e.DNO AND d.DNAME=departmentT;
  END$$
  
  CALL employees('department');
  
  -- CREATE a database and name it College then create a collection whit that database with the name of students
-- Insert 4 documents and then update some data and delete some data as well using the command line.
