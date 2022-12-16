const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "", // Enter your password here
    database: "testWad", //Try to use the same name for your database
    host: "localhost",
    port: "5432"
});

const execute = async(createTblQuery, insertDataQuery) => {
    try {
        await pool.connect();
        await pool.query(createTblQuery);
        await pool.query(insertDataQuery);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};



const createTblQuery = ` 
    CREATE TABLE IF NOT EXISTS "mycourses" (
        "id" SERIAL PRIMARY KEY, 
        "code" VARCHAR(200) NOT NULL,
        "title" VARCHAR(200) NOT NULL,  
        "semester" VARCHAR(200) NOT NULL,  
        "homeworks" integer,
        "exam" integer, 
        "note" VARCHAR(200), 
        "description" VARCHAR(2000)
        );`;

const insertDataQuery = `WITH data (code, title, semester,  homeworks, exam, note, description) AS 
   (
    VALUES
    ('LTAT.05.006', 'Software Testing', 'spring',  48, 46,'', 'The goal of the course is to introduce basic concepts on software testing levels, testing approaches, testing types, and Test-Driven Development (TDD)'), 
    ('LTAT.05.003', 'Software Engineering', 'fall',  34, 33,'', 'The course is designed to present software engineering concepts and principles in parallel with the software development life cycle.' ),  
    ('LTAT.05.026', 'Enterprise Modelling', 'spring',  32, 20,'', 'The objectives of this course are to get acquainted with basic concepts and principles of enterprise modeling techniques and their usage in the field of business development.' ),  
    ('MTAT.03.295', 'Agile Software Development', 'fall',  21, 46,'',  'The goal of the course is to introduce basic concepts on Agile Software Development and current practices. Students will implement agile practices during the development of a web application.' ), 
    ('LTAT.02.007', 'Data Engineering', 'fall', 28, 21, '', 'The course aims at giving an overview of Data Engineering foundational concepts. It is tailored for 1st and 2nd year Msc students and PhDs who would like to strengthen their fundamental understanding of Data Engineering, i.e., Data Modelling, Collection, and Wrangling.') 
    )
  INSERT INTO mycourses(code, title, semester,  homeworks, exam, note, description) 
  SELECT  d.code, d.title, d.semester,  d.homeworks, d.exam, d.note, d.description
  FROM data d
  WHERE NOT EXISTS (SELECT * FROM mycourses WHERE id = 1);
`

execute(createTblQuery, insertDataQuery).then(result => {
    if (result) {
        console.log('If does not exists, table "mycourses" is created');
    }
});

module.exports = pool;