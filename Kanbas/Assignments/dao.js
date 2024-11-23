import Database from "../Database/index.js";
export function findAllAssignments() {
  return Database.assignments;
}
// export function findCoursesForEnrolledUser(userId) {
//   const { courses, enrollments } = Database;
//   const enrolledCourses = courses.filter((course) =>
//     enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
//   return enrolledCourses;
// }
export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}
export function findAssignmentsForCourse (courseId){
  const {assignments} = Database;
  return assignments.filter((assignment)=>assignment.course === courseId);
}