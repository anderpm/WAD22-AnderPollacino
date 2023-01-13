const express = require('express');
const pool = require('./database');
const cors = require('cors')


const port = process.env.PORT || 3000;
const app = express();



app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});



app.get('/api/mycourses', async(req, res) => {
    try {
        console.log("A get all request has arrived");
        const courses = await pool.query(
            "SELECT * FROM mycourses"
        );
        res.json(courses.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/api/mycourses/:id', async(req, res) => {
    try {
        console.log("get a post with course parameter request has arrived");
        const { id } = req.params;
        const posts = await pool.query(
            "SELECT * FROM mycourses WHERE id = $1", [id]
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});