const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(process.argv[2]);
      let body = '';
      const keys = [];
      for (const field in data) {
        if (field in data) {
          keys.push(field);
        }
      }
      keys.sort();
      for (const key of keys) {
        body = `${body}\nNumber of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`;
      }
      response.status(200).send(`This is the list of our students${body}`);
    } catch (error) {
      response.status(500).send('Cannot load the database')
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'SWE' && major !== 'CS') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      try {
        const data = await readDatabase(process.argv[2]);
        response.status(200).send(`List: ${data[major].join(', ')}`);
      } catch (error) {
        response.status(500).send('Cannot load the database');
      }
    }
  }
}

module.exports = StudentsController;
