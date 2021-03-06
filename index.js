const express = require('express');
const app = express();
const cors = require('cors');

// middleware 
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server is listen on port 5000");
})

// routes   ;
// app.post('/todos', async (req, res) => {
//     try {
//         const { description } = req.body;
//         console.log(req.body);
//         const newTodo = await pool.query('INSERT INTO mytodo (description) VALUES($1) RETURNING *',
//             [description]
//         );

//         res.json(newTodo.rows[0]);
//     } catch (err) {
//         console.log(err.message)
//     }
// })