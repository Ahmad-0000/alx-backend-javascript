const fs = require('node:fs');

function countStudents(path) {
  try {
    const studentsData = {};
    let data = fs.readFileSync(path, 'utf8');
    data = data.split('\n');
    data = data.slice(1);
    data = data.filter((line) => line !== '');
    const studentsNum = data.length;
    for (let i = 0; i < data.length; i += 1) {
      data[i] = data[i].split(',');
    }
    data.forEach((line) => {
      const field = line[line.length - 1];
      if (!(field in studentsData)) {
        studentsData[field] = { num: 1, names: [line[0]] };
      } else {
        studentsData[field].num += 1;
        studentsData[field].names.push(line[0]);
      }
    });
    console.log(`Number of students: ${studentsNum}`);
    for (const f in studentsData) {
      if (f in studentsData) {
        console.log(`Number of students in ${f}: ${studentsData[f].num}. LIST: ${studentsData[f].names.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
