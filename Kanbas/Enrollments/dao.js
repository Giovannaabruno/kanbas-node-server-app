import Database from "../Database/index.js";
import model from "./model.js";
// export function enrollUserInCourse(userId, courseId) {
//   const { enrollments } = Database;
//   const newEnrollment = { _id: Date.now(), user: userId, course: courseId };
//   enrollments.push(newEnrollment);
//   return newEnrollment;
// }
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

// export async function findCoursesForUser(userId) {
//   const enrollments = await model.find({ user: userId }).populate("course");
//   return enrollments.map((enrollment) => enrollment.course);
//  }
 export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
 }
 
//  export function enrollUserInCourse(user, course) {
//   return model.create({ user, course });
//  }
//  export function unenrollUserFromCourse(user, course) {
//   return model.deleteOne({ user, course });
//  }
 export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
 }
 export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
 }
 export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
 }
 
 
 