const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    response.status(200).send(await readDatabase(process.argv[2]).then((data) => {
      let body = '\nNumber of students: 10';
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
      return `This is the list of our students${body}`;
    }, () => {
      response.status(500);
      return new Error('Cannot load the database');
    }));
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'SWE' && major !== 'CS') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      response.status(200).send(await readDatabase(process.argv[2]).then((data) => {
        const list = data[major];
        return `List: ${list.join(', ')}`;
      }), () => {
        response.status(500);
        return new Error('Cannot load the database');
      });
    }
  }
}

module.exports = StudentsController;
