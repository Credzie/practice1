create database complexdatabase;
use complexdatabase;

create table Article(
id int primary key,
title varchar(15) not null,
text varchar(25),
publishStatus boolean,
topic varchar(10),
author varchar(15) not null,
publicationdate int not null
);

create table Topic(
name varchar(10) primary key,
description varchar(30) not null
);

create table Author(
username varchar(15) primary key,
displayName varchar(20) not null
);

create table course(
shortname varchar(10) primary key,
fullName varchar(30) not null
);

create table relevant_for1(
articleId int,
Course varchar(15) not null,
primary key(articleId, course),
FOREIGN KEY (Course) references course(shortname)
);

alter table Article add foreign key(id)
references relevant_for(articleId);
/*alter table Topic add foreign key(name)
references Article(topic);
alter table Author add foreign key(username)
references Article(author);
alter table course add foreign key(shortname)
references relevant_for(course);*/
alter table Article 
ADD foreign key (topic) references Topic(name),
ADD FOREIGN KEY (author) references Author(username);


 