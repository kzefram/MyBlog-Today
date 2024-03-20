/*Deleting the database*/

DROP DATABASE IF EXISTS techblogDB;

/*Creating the database*/
CREATE DATABASE techblogDB;

/*Using the database*/
USE techblogDB;

/*Creating the table for the users*/
CREATE TABLE users (
  user_id                     int(18)                     PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username                    varchar(80)                 NOT NULL,
  password                    varchar(80)                 NOT NULL
);

/*Creating the table for the posts*/
CREATE TABLE posts (
  post_id                     int(18)                     PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title                       varchar(80)                 NOT NULL,
  content                     text                        NOT NULL,
  user_id					 int						 NOT NULL,
  category					 int						 NOT NULL,
  date_create                datetime                    NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);

/*Creating the table for the comments*/
CREATE TABLE comments (
  comment_id                  int(18)                     PRIMARY KEY NOT NULL AUTO_INCREMENT,
  content                     text                        NOT NULL,
  user_id      				  int					 	  nOT NULL,             
  post_id                     int						  NOT NULL,
  date_created                datetime                    NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (user_id),
  FOREIGN KEY (post_id) REFERENCES posts (post_id)
);

