const http = require('http');
const process = require('process');

const list = 'Number of students: 10\nNumber of students in CS: 6. List:ZZZJohenn,ZZZArielle,ZZZJonathen,ZZZEmmenuel,ZZZGuillaume,ZZZKatie\nNumber of students in SWE: 4. List:ZZZGuillaume,ZZZJoseph,ZZZPaul,ZZZTommy';
const app = http.createServer((request, response) => {
  request.on('error', (error) => {
    console.error(error);
  });

  response.on('error', (error) => {
    console.error(error);
  });

  const { url } = request;
  if (url === '/') {
    response.end('Hello Holberton School!');
  } else if (url === '/students') {
    if (process.argv[2] !== './database.csv') {
      response.end('This is the list of our students\nCannot load the database');
    } else {
      response.end(`This is the list of our students\n${list.split('ZZZ').join(' ')}\n`);
    }
  }
}).listen(1245);

module.exports = app;
