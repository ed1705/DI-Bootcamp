-- -- Database: Exercises_In_Class

-- -- DROP DATABASE IF EXISTS "Exercises_In_Class";

-- -- CREATE DATABASE "Exercises_In_Class"
-- --     WITH
-- --     OWNER = postgres
-- --     ENCODING = 'UTF8'
-- --     LC_COLLATE = 'C'
-- --     LC_CTYPE = 'C'
-- --     TABLESPACE = pg_default
-- --     CONNECTION LIMIT = -1
-- --     IS_TEMPLATE = False;
	
-- --  CREATE TABLE city_info(
-- --   event_datetime timestamp NOT NULL,
-- --   city VARCHAR(50) NOT NULL,
-- --   temperature decimal NOT NULL,
-- --   light decimal NOT NULL,
-- --   airquality_raw decimal NOT NULL,
-- --   sound decimal NOT NULL,
-- --   humidity decimal NOT NULL,
-- --   dust decimal NOT NULL
-- -- )

-- -- <!-- INSTRUCTIONS -- Questions -->
-- -- 1. Select everything from the table. (every row and columns) - How many records does the table have? SELECT count(event_datetime) FROM city_info;4711
-- -- 2. What was Bostons temperature on the 01/03/2015 at 11am ?
-- SELECT temperature FROM city_info WHERE city = 'Boston' 
-- AND event_datetime::TIMESTAMP::DATE='2015/03/01 11:00:00'AND EXTRACT (HOUR from event_datetime)=11;
-- -- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ?
-- -- SELECT event_datetime FROM city_info WHERE city = 'San Francisco' AND temperature BETWEEN 28 AND 30;

-- -- 4. Which city was the most noisy (show the name of the city, the date and the noise index)? - Don't use the MAX function
-- SELECT city, event_datetime, sound FROM city_info ORDER BY sound DESC LIMIT 1; 
-- SELECT city, EXTRACT (DATE from event_datetime) AS date , sound FROM city_info ORDER BY sound DESC LIMIT 1;

-- -- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function
-- -- SELECT city, event_datetime, sound FROM city_info ORDER BY sound ASC LIMIT 1;

-- -- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.
-- SELECT dust FROM city_info WHERE city = 'San Francisco' 
-- AND event_datetime::TIMESTAMP::DATE='2015-03-26 20:00:00'AND EXTRACT (HOUR from event_datetime)>=20;

-- -- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
-- SELECT event_datetime FROM city_info WHERE city ='Geneva'
-- AND (humidity < 40 OR humidity > 60);
-- -- AND humidity NOT BETWEEN 40 AND 60;(also)

-- -- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.
-- SELECT city,event_datetime,EXTRACT(DOW FROM event_datetime) AS day_of_week
-- FROM city_info ORDER BY light DESC LIMIT 1;

-- -- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase).
-- -- - Look at the DISTINCT constraint.
-- SELECT DISTINCT CITY FROM city_info WHERE city ILIKE 'S%';
-- -- 10. Add to the table, todays information in Israel - of this very hour.
-- -- (event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
-- -- - Use the return statement to see what you just inserted:
-- INSERT into city_info(event_datetime, city, temperature, light, airquality_raw, sound, humidity, dust)
-- VALUES(NOW(), 'Israel', 40,20,20,20,20,20)
-- RETURNING*;
-- -- COPY city_info(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust) 
-- -- FROM '/tmp/city_info.csv' DELIMITER ',' CSV HEADER;
-- SELECT * FROM city_info;
-- -- SELECT city, event_datetime, sound FROM city_info ORDER BY sound DESC LIMIT 3; GENEVA
-- -- SELECT city, event_datetime, sound FROM city_info ORDER BY sound ASC LIMIT 3; BOSTON
-- -- SELECT dust FROM city_info WHERE city = 'San Francisco' AND event_datetime ( > '2015-03-26 20:00:00' < '2015-03-26 23:00:00');??????
-- SELECT * FROM city_info;
-- SELECT temperature FROM city_info WHERE city = 'Boston' 
-- AND event_datetime::TIMESTAMP::DATE='2015/03/01 11:00:00'AND EXTRACT (HOUR from event_datetime)=11;
--  SELECT event_datetime FROM city_info WHERE city = 'San Francisco' AND temperature BETWEEN 28 AND 30;
 
--  SELECT dust FROM city_info WHERE city = 'San Francisco' 
-- AND event_datetime::TIMESTAMP::DATE='2015-03-26 20:00:00'AND EXTRACT (HOUR from event_datetime)>20;
-- SELECT event_datetime FROM city_info WHERE city ='Geneva'
-- AND humidity NOT BETWEEN 40 AND 60;
-- SELECT event_datetime FROM city_info WHERE city ='Geneva'
-- AND (humidity < 40 OR humidity > 60);

-- SELECT city,event_datetime,EXTRACT(DOW FROM event_datetime)
-- FROM city_info ORDER BY light DESC LIMIT 1;
-- SELECT DISTINCT CITY FROM city_info WHERE city ILIKE 'S%';


SELECT * FROM city_info;
-- SELECT event_datetime FROM city_info WHERE city = 'San Francisco' AND temperature BETWEEN 28 AND 30;
--  AS date , sound FROM city_info ORDER BY sound DESC LIMIT 1;

Exercise on AggregateFunction
11:46
-- -- Use aggregate functions
1. How many rows per city does the table have ?
SELECT city, COUNT(*) FROM city_info GROUP BY city;
2. What is the average dust index in the city of Boston between 01/03/2015 and 05/03/2015?
SELECT AVG(dust) FROM city_info WHERE city LIKE 'Boston'AND (event_datetime::TIMESTAMP::DATE=2015-03-01 and 2015-03-05);
3. How many rows does the table have about the city "San Francisco" ?
SELECT city, COUNT(*) FROM city_info GROUP BY city HAVING city ='San Francisco'; 
-- 4. Where and when (only hour) it's the noisiest in the world?;

SELECT city, EXTRACT (HOUR from event_datetime) FROM city_info 
WHERE sound=(SELECT MAX(sound)FROM city_info );

CREATE SEQUENCE seq_dept
INCREMENT 10
START 10;


CREATE TABLE DEPARTMENT
(
 DEPTCODE   INTEGER NOT NULL DEFAULT nextval('seq_dept') PRIMARY KEY,
 DeptName   CHAR(30),
 LOCATION   VARCHAR(33) UNIQUE
);

CREATE TABLE EMPLOYEE
(
 EmpCode      INTEGER PRIMARY KEY,
 EmpFName     VARCHAR(15) NOT NULL,
 EmpLName     VARCHAR(15) NOT NULL,
 Job          VARCHAR(45),
 Manager      CHAR(4),
 HireDate     DATE,
 Salary       DECIMAL DEFAULT 0,
 Commission   INTEGER,
 Department_code     INTEGER REFERENCES DEPARTMENT (DEPTCODE)
);
