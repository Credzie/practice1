create database SportsSchool;
use SportsSchool;

create table studentTable(
studentId int primary key,
studentName  varchar(30) not null
);

create table activityPick(
activityId int primary key,
activityName varchar(15) not null,
activityCost int,
studentId int,
foreign key(activityId) references studentTable(studentId)
);

