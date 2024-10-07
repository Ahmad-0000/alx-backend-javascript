export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = [];
  for (const i of Object.keys(allEmployees)) {
    for (const j of allEmployees[i]) {
      employees.push(j);
    }
  }
  return employees;
}
