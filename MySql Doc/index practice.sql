[11:58 AM] Zakirullah Pardis
-- Entity Relationship Diagram - ERD

CREATE DATABASE College;

USE College;
 
CREATE TABLE Student(

	studentId INT PRIMARY KEY AUTO_INCREMENT,

    studentName VARCHAR(20) NOT NULL,

    studentAge INT CHECK(studentAge>=18),

    studentLocation VARCHAR(15) DEFAULT 'London'

    );

DESCRIBE Student;
 
-- Inserting data 

-- Syntax

-- INSERT INTO tableName (column1, column2, ...) VALUES (value1, value2 ,.. );

INSERT INTO Student(studentName, studentAge, studentLocation) VALUES

	('Mark',30, 'Manchester');
 
SELECT * FROM Student;
 
INSERT INTO Student(studentName, studentAge, studentLocation) VALUES

	('Ender',20, 'Manchester');
 
SELECT * FROM Student;
 
INSERT INTO Student(studentName, studentAge) VALUES

	('John',20 );
 
SELECT * FROM Student;
 
INSERT INTO Student(studentName, studentAge, studentLocation) VALUES

	('Robert', 30,'London'),

    ('Philip',28,'Leeds'),

    ('Erica',25,'Liverpool');
 
SELECT * FROM Student;

-- be back on 10:55
 
 
CREATE DATABASE World;

USE World;
 
CREATE TABLE Country(

	id INT PRIMARY KEY,

    name VARCHAR(10) NOT NULL

    );
 
CREATE TABLE City(

	cityId INT PRIMARY KEY,

    cityName VARCHAR(10) NOT NULL,

    countryId INT,

    FOREIGN KEY(countryId) REFERENCES Country(id)

    );
 
USE College;

SELECT * FROM Student;
 
UPDATE Student SET studentName='Matt' WHERE studentName='Robert';
 
SELECT * FROM Student;
 
UPDATE Student SET StudentName='Nikita', studentLocation='London' 

	WHERE studentName='Erica' AND studentAge=25;
 
SELECT * FROM Student;
 SELECT * FROM City;
 SELECT * FROM Country;
 
 -- update any student record whose name is mark but is younger than 40yrs --
 -- change the student name to 'Henry' and age to '35' for any student whose name is 'Matt'
 -- and location is not 'Manchester'
 