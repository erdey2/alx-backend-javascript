export default function getListStudentIds(students) {
  if (Array.isArray(students) && students.every((item) => typeof item === 'object' && item !== null)) {
    return students.map((student) => student.id);
  }
  return [];
}
