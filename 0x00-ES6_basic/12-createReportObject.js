export default function createReportObject(employeeList) {
  return {
    allEmployees: employeeList,
    getNumberOfDepartments(list) {
      return Object.keys(list).length;
    },
  };
}
