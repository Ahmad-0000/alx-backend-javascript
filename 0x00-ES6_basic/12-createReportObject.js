export default function createReportObject(employeesList) {
  let departmentsNumber = 0;
  const report = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(reportAllEmployees) {
      Object.keys(reportAllEmployees).forEach(() => {
        departmentsNumber += 1;
      });
      return departmentsNumber;
    },
  };

  return report;
}
