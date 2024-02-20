create database complexdatabase2;
use complexdatabase2;

create table employee(
fname varchar(10) not null,
minit varchar(10),
lname varchar(10) not null,
Ssn int primary key,
bdate date not null,
address varchar (20) not null,
sex varchar(6),
salary decimal(8,2),
foreign key (super_ssn) references employee(Ssn),
dno int);

CREATE TABLE IF NOT EXISTS Department (
  DNAME varchar(20) NOT NULL,
  DNUMBER int NOT NULL,
  MGRSSN int(9) default NULL,
  MGRSTARTDATE date default NULL,
  PRIMARY KEY  (DNUMBER));
  
  CREATE TABLE IF NOT EXISTS Dependent (
  ESSN int(9) NOT NULL,
  DEPENDENT_NAME varchar(15) default NULL,
  SEX enum('M','F') default NULL,
  BDATE date default NULL,
  RELATIONSHIP enum('DAUTHER','SON','SPOUSE') default NULL);
  
  CREATE TABLE IF NOT EXISTS Dept_Locations (
  DNUMBER int NOT NULL,
  DLOCATION varchar(20) NOT NULL,
  PRIMARY KEY  (DNUMBER, DLOCATION));
  
  CREATE TABLE IF NOT EXISTS Project (
  PNAME varchar(20) default NULL,
  PNUMBER int(11) NOT NULL,
  PLOCATION varchar(20) default NULL,
  DNUM int default NULL,
  PRIMARY KEY  (PNUMBER));
  
  CREATE TABLE IF NOT EXISTS Works_On (
  ESSN int(9) NOT NULL,
  PNO int(11) NOT NULL,
  HOURS double(3,1) default NULL,
  PRIMARY KEY  (ESSN,PNO));
  
  -- Making the MGRSSN of Department table as Foreign KEY which references to SSN of Employee table-------------------------------------
ALTER TABLE Department ADD  FOREIGN KEY (MGRSSN) REFERENCES Employee (SSN);

-- Making the ESSN of Dependent table as Foreign KEY which references to SSN of Employee table-------------------------------------
ALTER TABLE Dependent ADD FOREIGN KEY (ESSN) REFERENCES Employee (SSN);

-- 
-- Making the DNUMBER of Dept_Locations table as Foreign KEY which references to DNUMBER of Department table-------------------------------------
ALTER TABLE Dept_Locations ADD FOREIGN KEY (DNUMBER) REFERENCES Department (DNUMBER);

-- 
-- Making the DNO of Employee table as Foreign KEY which references to DNUMBER of Department table-------------------------------------
ALTER TABLE Employee ADD FOREIGN KEY (DNO) REFERENCES Department (DNUMBER);

-- Making the SUPERSSN of Employee table as Foreign KEY which references to SSN of the same table (Employee table)-------------------------------------
ALTER TABLE Employee ADD  FOREIGN KEY (SUPERSSN) REFERENCES Employee (SSN);

-- 
-- Making the DNUM of Project table as Foreign KEY which references to DNUMBER of Department table-------------------------------------
ALTER TABLE Project ADD FOREIGN KEY (DNUM) REFERENCES Department (DNUMBER);

-- 
-- Making the ESSN of Works_On table as Foreign KEY which references to SSN of Employee table-------------------------------------
ALTER TABLE Works_On ADD  FOREIGN KEY (ESSN) REFERENCES Employee (SSN);

-- 
-- Making the PNO of Works_On table as Foreign KEY which references to PNUMBER of Project table-------------------------------------
ALTER TABLE Works_On  ADD FOREIGN KEY (PNO) REFERENCES Project (PNUMBER);



 

