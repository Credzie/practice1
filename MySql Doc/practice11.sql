-- what is inner join - 
-- what is left join
-- what is right join 
-- what is the difference b/w union and join

-- CROSS JOIN - works similar to inner join
SELECT * FROM Instructor CROS JOIN Trainer on trainerName=InstructorName;

-- self join - when we join a table to itself
-- display all empolyee name and their supervisor name
-- you need to use mysql ALIAS (AS) for table 

select concat(e.fname,'',e.lname) AS 'Empolyee', concat(m.fname,'',m.lname) as 'Manager'
FROM Employee e LEFT JOIN Employee m ON m.ssn=e.superssn;

use company;
-- String method 
-------------------------------------------------------------------------------------------
-- group_concat - 
select sex, group_concat(fname,'',lname) AS Group1 from Employee where sex is not null group by SEX;

-- TRIM()
-- is used to remove the space to either side of the string 
select trim('      zak       ') AS Name;
select rtrim('      zak       ') AS Name;
select fname, trim(lname) from employee;

-- display all employee name in uppercase or lowercase
select upper(fname), lcase(lname) from Employee;
select upper(fname), lcase(trim(lname)) from Employee;

select current_user();
select user();

-- Date Method
-- NOW();	Return the current date and time
-- CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP	Synonyms for NOW()
-- CURDATE()	Return the current date
-- CURRENT_DATE(), CURRENT_DATE	Synonyms for CURDATE()
-- CURTIME()	Return the current time
-- CURRENT_TIME(), CURRENT_TIME	Synonyms for CURTIME()
-- MONTHNAME()	Return the name of the month
-- DAYNAME()	Return the name of the weekday
-- DAY()	Synonym for DAYOFMONTH()

select now();
select curdate();
select curtime();
select monthname('2024-02-04');
select monthname(curdate());
select dayname('2024-01-28');
select day(curdate());
select year(curdate());
select year('2022-01-28');
-- formatting data 
select date_format(curdate(), '%D %M %Y');

select format(250500.5654, 2);
select fname, lname, format(salary, 0) AS 'Salary' from Employee;
select truncate(250500.5654, 2);
select fname, lname, truncate(salary, 0) AS 'Salary' from Employee;
 
-- 30th of January 2024
select date_format(curdate(), '%D %M %Y');

--
-- ON DELEE CASCADE
-- ON DELETE SET NULL

CREATE DATABASE Day_7;
USE Day_7;
CREATE TABLE Country
	(
		id INT PRIMARY KEY,
		name VARCHAR(20)
    );
CREATE TABLE City
	(
		cityId INT PRIMARY KEY AUTO_INCREMENT,
        cityName VARCHAR(20),
        countryId INT,
        FOREIGN KEY (countryId) REFERENCES Country(id) ON DELETE SET NULL
         /*FOREIGN KEY (countryId) REFERENCES Country(id) ON DELETE CASCADE*/
	);
INSERT INTO Country VALUES(1,'UK'),(2,'USA'),(3,'Germany');
INSERT INTO City(cityName, countryId) VALUES
	('London',1),('Manchester',1),('New York',2);
select * from city;
select * from country;
DELETE FROM Country WHERE Name='UK';
 
 create table customers(
 id int primary key,
 fname varchar(10),
 lname varchar(10),
 age int,
 country varchar (10)
 );
 
 
create table orders(
order_id int,
product varchar(10),
total int,
customer_id int,
foreign key (customer_id) references customers(id)ON DELETE CASCADE);

INSERT INTO customers VALUES(1,'john','Doe',31,'USA'),(2,'Robert','Luna',22,'USA'),(3,'David','DoRobinson',22,'Uk'),(4,'John','Reinhardt',25,'Uk'),(5,'Betty','Doe',28,'UAE');
select * from customers;
INSERT INTO orders values(1, 'Paper',500,5),(2, 'Pen',10,2),(3, 'Marker',120,3),(4, 'Books',1000,1),(5, 'Erasers',20,4);
select * from orders;

DELETE FROM orders WHERE product='Pen';
drop table orders;

set SQL_SAFE_UPDATES=0;

CREATE TABLE Student(
	studentId INT PRIMARY KEY CHECK(studentId!=0),
    studentName VARCHAR(20)
    );
INSERT IGNORE INTO Student(studentId, studentName) VALUES
	(1,'Mark'),
    (2,'John'),
    ('Text','Matt'),
    (4,'Simon'),
    (5,'Thomas');
 SELECT * FROM Student;
 
 
 -- ROLLBACK
 set Autocommit=0;

delete from student where studentname='thomas';
commit;
rollback;

-- you cannot ROLLBACK data deleted with TRUNCATE
