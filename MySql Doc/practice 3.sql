-- Enitity Relationship Diagram -- ERD

CREATE DATABASE University;
USE University;

CREATE TABLE Pupils(
pupilID INT PRIMARY KEY AUTO_INCREMENT,
pupilName VARCHAR(20) NOT NULL,
pupilAge INT CHECK(pupilAge>=18),
pupilLocation VARCHAR(15) DEFAULT 'London'
);

describe pupils;

-- Inserting data
-- Syntax 
-- INSERT into tablename (column1, column2, ...) VALUES (value1, value2 ,...);
insert INTO Pupils(pupilName, pupilAge, pupilLocation) VALUES
     ('Mark',30,'Manchester');
     
select * FROM Pupils;     

insert INTO Pupils(pupilName, pupilAge, pupilLocation) VALUES
     ('James',16,'Manchester');
 insert INTO Pupils(pupilName, pupilAge, pupilLocation) VALUES
     ('Jason',20,'Birmingham');    
     
 select * FROM Pupils;
 
 insert INTO Pupils(pupilName, pupilAge) VALUES
     ('Credzie',22);    
     
INSERT INTO Pupils(pupilName, pupilAge, pupilLocation) values
	( 'robert', 30, 'London'),
    ('philip', 28, 'Leeds'),
    ('Erica', 25, 'Liverpool');
    
     select * FROM Pupils;
