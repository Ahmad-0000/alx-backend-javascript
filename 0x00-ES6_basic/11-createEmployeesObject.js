export default function createAnEmployeesObject(departmentName, employees) {
  const obj = {
    [departmentName]: employees,
  };

  return obj;
}
