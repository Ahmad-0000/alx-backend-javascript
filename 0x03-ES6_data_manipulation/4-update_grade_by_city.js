export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  const students2 = JSON.parse(JSON.stringify(students));
  return students2.filter((student) => student.location === city).map((student) => {
    for (const i of newGrades) {
      if (student.id === i.studentId) {
        const tmpStudent = JSON.parse(JSON.stringify(student));
        tmpStudent.grade = i.grade;
        return tmpStudent;
      }
    }
    const tmpStudent = JSON.parse(JSON.stringify(student));
    tmpStudent.grade = 'N/A';
    return tmpStudent;
  });
}
