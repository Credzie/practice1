create database afterSchoolClub;
use afterSchoolClub;


create table grades(
studentId int primary key auto_increment,
studentName varchar(20) not null,
studentAge int check(studentAge<=20),
studentGender varchar(9) not null,
studentGrade int check(studentGrade<=100)
);

describe grades;

insert into grades(studentName, studentAge, studentGender, studentGrade) values
('Paul Jill', 18, 'Male', 75),
('Remi Happy', 19, 'Female', 70),
('Mary Idris', 18, 'Female', 83),
('Calrol Browne', 19, 'Female', 65),
('Femi Frank', 18, 'Male', 80);

 select * FROM grades;