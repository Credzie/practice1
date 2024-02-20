CREATE DATABASE Firstdatabase; -- will create a databse with Firstdatabase
CREATE DATABASE library;
CREATE DATABASE College;
CREATE DATABASE school; 
-- single line comment
-- MySQL is not case sensitive
/*
multi line commment
*/

show databases; -- Will list all the available databases for you 
USE Firstdatabase; -- will select the Firstdatabase database
SELECT DATABASE(); -- will show you the selected database.

DROP DATABASE TEST1; -- WILL delete the TEST1 Database
 
CREATE TABLE Student(
StudentID INT,
studentName varchar(15),
StudentDOB DATE,
StudentMarks Decimal(4,1)
);


USE library;
DESCRIBE student;



