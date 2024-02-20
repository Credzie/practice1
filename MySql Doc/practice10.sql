
CREATE DATABASE INSTRUCTORS;

USE INSTRUCTORS;
 
CREATE TABLE Instructor (

InstructorID INT PRIMARY KEY NOT NULL,

InstructorName VARCHAR(30)

);
 
CREATE TABLE Trainer (

TrainerID INT PRIMARY KEY NOT NULL,

TrainerName VARCHAR(30),

TrainerAge INT NOT NULL

);
 
INSERT INTO Instructor (InstructorID, InstructorName) VALUES 

  (2, 'Mark'), (1, 'Abdul'), (3, 'Zak'), (4, 'Sandra');

  INSERT INTO Trainer (TrainerID, TrainerName, TrainerAge) VALUES 

  (1, 'Abdul', 32), (2, 'Zak', 26), (3, 'Waqas', 36);
  
  select * from Instructor;
  select * from Trainer;
  
  select InstructorName from Instructor
  union
  select TrainerName from Trainer;

  select InstructorName from Instructor
  union all
  select TrainerName from Trainer;  
  
  select * from JanOrder
  union all
  select * from FebOrder;
  
  ----------------------------------------------------------------------------------------------------
  -- display all employees names and their department names
    USE company; 
  select employee.fname, employee.lname, department.dname
  from employee inner join department on employee.dno=department.dnumber;
  select employee.fname, employee.lname, department.dname
  from employee Left join department on employee.dno=department.dnumber;  

USE INSTRUCTORS;
  select * from Instructor Right join Trainer 
  on InstructorName=TrainerName;
  select * from Instructor left join Trainer 
  on InstructorName=TrainerName;
  
  ---------------------------------------------------------
  -- display all countries and their capital name
  -- from another database called world
  use world;
  select c.Name, ci.Name FROM Country c inner join City ci 
  on c.capital=ci.ID;
  
-- alternate view
select Country.Name 'country name', City.Name from Country INNER JOIN City ON Capital=ID 
order by Country.Name;

select c.Name, ci.Name, cl.Language from
Country AS c INNER JOIN City ci ON c.CODE=ci.CountryCode
INNER JOIN CountryLanguage cl ON cl.Country=c.Code 
AND cl.IsOfficial='T';