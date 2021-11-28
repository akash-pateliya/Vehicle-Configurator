ng generate module auth --module app --routing true --route auth

create table users (
    companyUid binary(16) default (uuid_to_bin(uuid())) not null primary key,
    companyName varchar(50),
    companyAddress VARCHAR(255),
    email VARCHAR(50),
    userName VARCHAR(50),
    password VARCHAR(50),
    contactNumber VARCHAR(50)
);