export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  const ids = students.map((student) => student.id);
  return ids.reduce((a, b) => a + b);
}
