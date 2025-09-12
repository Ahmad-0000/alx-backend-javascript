export default function createIteratorObject(report) {
  return {
    allEmployees: report.allEmployees,
    [Symbol.iterator]: function* () {
      let employees = [];
      Object.keys(this.allEmployees).forEach((departement) => {
        employees = employees.concat(this.allEmployees[departement]);
      });
      for (let i = 0; i < employees.length; i++) {
        yield employees[i];
      }
    }
  }
}
