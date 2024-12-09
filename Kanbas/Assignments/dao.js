import Database from "../Database/index.js";
import model from "./model.js"

export async function findAllAssignments() {
  return await model.find({});
}
// export function findCoursesForEnrolledUser(userId) {
//   const { courses, enrollments } = Database;
//   const enrolledCourses = courses.filter((course) =>
//     enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
//   return enrolledCourses;
// }
export async function createAssignment(assignment) {
  const newAssignment = new model(assignment);
  // Database.assignments = [...Database.assignments, newAssignment];
  return await newAssignment.save();
}

export async function deleteAssignment(assignmentId) {
  return await model.findByIdAndDelete(assignmentId);
}

export async function updateAssignment(assignmentId, assignmentUpdates) {
  return await model.findByIdAndUpdate(assignmentId, assignmentUpdates, {
    new: true,
    runValidators: true,
  })
}
export async function findAssignmentsForCourse(courseId) {
  return await model.find({course: courseId});
}