const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    const studentsData = {};
    let data = await fs.readFile(path, { encoding: 'utf8' });
    data = data.split('\n');
    data = data.slice(1);
    data = data.filter((line) => line !== '');
    for (let i = 0; i < data.length; i += 1) {
      const fields = data[i].split(',');
      if (fields[3] in studentsData) {
        studentsData[fields[3]].push(fields[0]);
      } else {
        studentsData[fields[3]] = [fields[0]];
      }
    }
    return studentsData;
  } catch (error) {
    return error;
  }
}

module.exports = readDatabase;
