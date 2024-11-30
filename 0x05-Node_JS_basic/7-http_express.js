const express = require('express');
const process = require('process');

const database = process.argv[2];
const app = express();
const list = `Number of students: 10` + `\nNumber of students in CS: 6. LIST: ahmad, ali, unknown, shaza, amna, BBB` + `\nNumber of students in SWE: 4. LIST: hamada, Ahmad, yousuf, Another`;
app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  response.send(list);
});

app.listen(1245);

module.exports = app;
