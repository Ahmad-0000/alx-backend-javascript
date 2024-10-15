export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.map((student) => student.id).reduce((a, b) => a + b);
}
