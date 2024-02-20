-- Delete code to dleteing specific data in a table --
-- syntax 
-- delete FROM tableName WHERE condition
-- eg. DELETE FROM sportsschool WHERE trainierName= 'ZaK';

-- TRUNCATE tableName 
-- eg. truncate sportsschool;

use university;
select * from pupils;
describe pupils;
-- Drop action in SQL
-- ALTER TABLE tablename DROP COLUMN columnName
-- eg. ALTER TABLE trainer DROP COLUMN trainerAge;
-- DROP TABLE trainer;

-- ALTER COMMAND allows you to change the structure of a column without recreating from scratch.
-- add instructorDOB column to the instructor table 
alter table pupils add column PupilsDOB date;

-- you can remove a column like InstructorDOB from the table
alter table pupils drop column PupilsDOB; 

-- to rename a column like instructorID column
alter table pupils rename column pupilName to studentAge;

-- remove primary key from instructor table
alter table pupils drop primary key;
-- make studentID column of pupils as primary key
alter table pupils add primary key(studentID);

create table Country(
countryId int primary key,
countryName varchar (10)
);

create table city(
cityId int primary key,
cityName varchar(10),
countryId int);

alter table city add foreign key(countryId) references Country(countryId);
select * from Country;

-- task 1 create 3 tables and link them to create a relatinal schema --
create database relatedTables;
use relatedTables;

create table country(
code int primary key,
Name varchar(25) not null,
continent varchar(20),
population int not null,
capital int
);

create table city(
id int primary key,
name varchar(25) not null,
countrycode int,
population int
);

create table Countrylanguage(
countrycode int,
language varchar(20) not null,
isofficial boolean,
percentage decimal(4,2),
primary key(countrycode,language)
);

alter table country add foreign key(capital)
references city(id);
alter table city add foreign key(countrycode)
references country(code);
alter table Countrylanguage add foreign key(countrycode)
references country(code);

 

