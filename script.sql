CREATE TABLE jobs(
  id_job INT(11) NOT NULL PRIMARY KEY,
  job_title VARCHAR(255) NOT NULL
);

ALTER TABLE jobs
  MODIFY id_job INT(11) NOT NUlL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE attendants(
  id_attendant INT(11) NOT NULL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  twitter_user VARCHAR(150) NOT NULL,
  avatar_url VARCHAR(255) NOT NULL,
  id_job INT(11) NOT NULL,
  FOREIGN KEY id_job REFERENCES jobs(id_job)
);

ALTER TABLE attendants
  MODIFY id_attendant INT(11) NOT NUlL AUTO_INCREMENT, AUTO_INCREMENT = 1;


-- Insert data to jobs table
INSERT INTO jobs(job_title)
VALUES ('Frontend Developer'),
       ('Backend Developer'),
       ('Full Stack Developer'),
       ('Data Scientist');

-- Reset the auto increment key
ALTER TABLE jobs AUTO_INCREMENT = 1


-- Insert data to attendants table
INSERT INTO attendants (first_name, last_name, email, twitter_user, avatar_url, id_job)
VALUES ('Mauro', 'Quinteros', 'quinterosmauro@e-quipu.pe', 'mauroquinteros', NULL, 1),
       ('Anny', 'Reyna', 'angiereyna@gmail.com', 'angiereyna', NULL, 2),
       ('Esteban', 'Leonidas', 'leonidasesteban@gmail.com', 'leonidasesteban', NULL, 1);

-- Reset the auto increment key
ALTER TABLE attendants AUTO_INCREMENT = 1