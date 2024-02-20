create database Carshop;
use Carshop;
drop database Carshop;


create table Member(
memberID varchar(10) primary key,
mFname varchar(20),
mLname varchar(20),
mLocation varchar(20));

create table Vehicle(
vehReg varchar(10) primary key,
vehMake varchar(10),
vehModel Varchar(10),
memberID varchar(10));

create table Engineer(
engID int primary key AUTO_INCREMENT,
engFname varchar(20),
engLname varchar(20));

create table Breakdown(
breakdownID int primary key AUTO_INCREMENT,
vehReg varchar(10),
engID int,
breakdowwnDate date,
breakdownTown time,
breakdownLocation varchar(10));

alter table Vehicle add foreign key(memberID) references Member(memberID);
alter table Breakdown add foreign key(vehReg) references Vehicle(vehReg);
alter table Breakdown add foreign key(engID) references Engineer(engID);

alter table Vehicle add primary key (vehReg);
describe vehicle;

insert into Member values ('one', 'James','Mark','Manchester'),
('two','Emma','White','Brigton'),('three','Jason','Umeyor','London'),
('four','Alice','White','Cambridge'),('five','Carl','Risby','London');
insert into Vehicle values ('stheg', 'Volvo','V56HL','one'),
('eryhr','Vauxhall','VH78Y','two'),('dryeh','Audi','AU33DI','three')
,('duyir','Toyota','TY7890','four'),('sujbf','AudiA4','AU456I','five')
,('fthry','BMW','BMW78','two'),('erdio','FordSel','FD356YT','one'),
('addfe','FordGalaxy','FD85P','three');
insert into Engineer values(1,'Matt','Hardy'),(2,'Susan','Whittle'),(3,'Robert','Barley');
insert into Breakdown values(101,'stheg',1,'2024-02-04','11:41','Manchester'),(102,'eryhr',2,'2024-04-06','1:51','Bristol')
,(103,'dryeh',3,'2024-03-23','7:41','Manchester'),(104,'duyir',2,'2024-11-22','8:42','London')
,(105,'sujbf',1,'2024-06-04','5:41','Reading'),(106,'fthry',1,'2024-05-21','4:20','London')
,(107,'erdio',2,'2024-02-08','3:41','Birminham'),(108,'addfe',3,'2024-08-13','12:13','Hull')
,(109,'duyir',2,'2024-02-11','11:41','London'),(110,'fthry',2,'2024-02-22','10:20','Coventry')
,(111,'erdio',1,'2024-09-26','05:23','Manchester'),(112,'addfe',1,'2024-07-09','01:21','Luton');

-- Task 1 -----
-- 1.The names of members who live in a location e.g. For example, London. 
select * from Member where mlocation='London';
-- 2. All cars registered with the company e.g. all Nissan cars. 
select * from Vehicle where vehMake='Audi';
-- 3. The number of engineers that work for the company. 
select count(*) from carshop.engineer;
-- 4. The number of members registered. 
select count(*) from carshop.Member;
-- 5. All the breakdown after a particular date 
select count(*) from carshop.breakdown where breakdowwnDate > '2024-02-04' ;
-- 6. All the breakdown between 2 dates 
select count(*) from carshop.breakdown where breakdowwnDate between '2024-02-04' and '2024-07-09' ;
-- 7. The number of time a particular vehicle has broken down 
select count(*) from carshop.breakdown where vehReg='duyir';
-- 8. The number of vehicles broken down more than once 
select count(*) from carshop.breakdown where vehReg > 1 ;
select vehReg, count(*) AS 'No of BD' from Breakdown
where vehReg is not null group by vehReg having count(*)>1;

-- Task 2 --
-- 1. All the vehicles a member owns. 
select concat(Member.mFname,'',Member.mLname) AS 'Owner', Vehicle. * FROM Vehicle  INNER JOIN Member
ON Vehicle.MemberID=Member.MemberID;
-- 2. The number of vehicles for each member in descending order. 
select concat(Member.mFname,'',Member.mLname) AS 'Owner', group_concat(vehModel) AS 'Model Owned' FROM Vehicle INNER JOIN Member
ON Vehicle.MemberID=Member.MemberID GROUP BY Vehicle.MemberID;
-- 3. All vehicles that have broken down in a particular location along with member details. 
select  Vehicle. * from Breakdown  left join Vehicle on Breakdown.vehReg=Vehicle.vehReg left join Member on Vehicle.vehReg=Member.memberID where breakdownLocation='London';
-- 4. A list of all breakdown along with member and engineer details between two dates. 
select count(*) from Breakdown left join Engineer on Breakdown.engID=Engineer.engID 
left join Vehicle on Breakdown.vehReg=Vehicle.vehReg left join Member on Vehicle.vehReg=Member.memberID 
where breakdowwnDate between '2024-02-04' and '2024-04-06';
-- 5. A further 3 relational queries of your choice that are meaningful to the company. 
select count(*) from Breakdown  left join Vehicle on Breakdown.vehReg=Vehicle.vehReg where breakdownTown < '5:41';
select count(*) from Member INNER JOIN Vehicle ON Member.MemberID=Vehicle.MemberID group by vehReg having count(*)<1;
select count(*) from Breakdown INNER JOIN Vehicle on Breakdown.vehReg=Vehicle.vehReg inner join Member on Vehicle.MemberID=Member.MemberID where breakdownLocation > 1;

select * from Member;

-- task 3
-- Using W3Schools or any other resource research the following functions – Avg, Max, Min, Sum.  Explain with examples how each one is used.  
use company;
-- an Example of using sum as an aggregate function
select sex, sum(salary) AS 'Total Salary', count(*) from employee group by sex having count(*)<4;
-- an Example of using Avg as an aggregate function
select avg(salary) as 'Average salary' from employee;
-- an Example of using Max as an aggregate function
select max(salary) as 'Max salary' from employee;
-- an Example of using Min as an aggregate function
select min(salary) as 'Min salary' from employee;







-- select concat(m.mFname,'',mLname) AS 'Owner', count(*) FROM Member m LEFT JOIN Vehicle ON m.MemberID=v.MEmberID GROUP BY v.MemberID;
-- select concat(m.mFname,'',mLname) AS 'Owner', count(*) FROM Member m LEFT JOIN Vehicle ON m.MemberID=v.MemberID GROUP BY v.MemberID;