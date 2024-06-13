const Student = require('../models/students');
const express = require('express');
const routes = express.Router();


// Get a list of students from the database
routes.get('/students', (req, res) => {
    res.send({ type: 'Get Request' });
});

// Add a student to the database
routes.post('/addStudent',async (req, res, next) => {
    try{
        const student = new Student(req.body)
        const result = await student.save();
        res.send('student added successfully')
        }catch(error){
            console.log(error.message);
    }
});

// Update a student in the database
routes.put('/students/:id', (req, res) => {
    res.send({ type: 'Update Request' });
});

// Delete a student from the database
routes.delete('/students/:id', (req, res) => {
    res.send({ type: 'Delete Request' });
});

module.exports = routes;
