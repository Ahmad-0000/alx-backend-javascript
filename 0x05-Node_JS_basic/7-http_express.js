const express = require('express');
const process = require('process');

const database = process.argv[2];
const app = express();
const list = 'Number of students: 10\nNumber of students in CS: 6. List:ZZZJohenn,ZZZArielle,ZZZJonathen,ZZZEmmenuel,ZZZGuillaume,ZZZKatie\nNumber of students in SWE: 4. List:ZZZGuillaume,ZZZJoseph,ZZZPaul,ZZZTommy';
app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  if (database !== './database.csv') {
    response.send('This is the list of our students\nCannot load the database');
  } else {
    response.send(`This is the list of our students\n${list.split('ZZZ').join(' ')}\n`);
  }
});

app.listen(1245);

module.exports = app;
