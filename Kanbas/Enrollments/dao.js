import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnrollment = { _id: Date.now(), user: userId, course: courseId };
  enrollments.push(newEnrollment);
  return newEnrollment;
}
export function unEnrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter((e)=>e.course !== courseId || e.user !== userId);
 
}
export function findCoursesUserEnrollIn(courseId, userId){
  const {enrollments} = Database;
  return enrollments.some(
    (enrollment)=>enrollment.user === userId && enrollment.course === courseId
  );
}

export function findAllEnrollments() {
  return Database.enrollments;
}
