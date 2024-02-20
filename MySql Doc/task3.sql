-- -----------------------------------------------
-- display all employees names and their department names
SELECT Employee.FNAME, Employee.LNAME, department.DNAME 
	FROM Employee INNER JOIN department ON employee.DNO=department.DNUMBER;
 
SELECT Employee.FNAME, Employee.LNAME, department.DNAME 
	FROM Employee INNER JOIN department ON employee.DNO=department.DNUMBER;
 
-- ----------------------
SELECT * FROM Trainer RIGHT JOIN instructor
	ON instructorName=trainerName;
 
 
-- display all countries and thier capital city name
use world;
SELECT c.Name 'Country Name', ci.Name FROM 
Country c INNER JOIN City  ci
ON c.Capital=ci.ID ORDER BY c.Name;
 
 
SELECT Country.Name 'Country Name', City.Name FROM Country INNER JOIN City 
ON Capital=ID ORDER BY Country.Name;
 
-- all departments and thier locations
-- display all projects and thier department name
-- display all employees and their dependent names
 
 use company;
 
 -- all departments and thier locations
SELECT d.DNAME, dl.DLOCATION FROM
	department d INNER JOIN dept_locations dl
    ON d.DNUMBER=dl.DNUMBER;
-- display all projects and thier department name
SELECT p.PNAME, d.DNAME FROM Project p LEFT JOIN department d
ON p.DNUM=d.DNUMBER;
 
-- display all employees and their dependent names
SELECT FNAME, LNAME, DEPENDENT_NAME FROM Employee LEFT JOIN dependent
	ON SSN=ESSN;
 