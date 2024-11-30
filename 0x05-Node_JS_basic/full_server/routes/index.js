const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const customRouter = express.Router();

customRouter.get('/', AppController.getHomepage);
customRouter.get('/students', StudentsController.getAllStudents);
customRouter.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = customRouter;
