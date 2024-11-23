import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {

    app.delete("/api/enrollments/:courseId/:userId", (req, res)=>{
        const {courseId, userId} = req.params
        const status = enrollmentsDao.unEnrollUserInCourse(userId, courseId);
        res.send(status);
    });
    app.post("/api/enrollments", (req, res)=>{
        const {courseId, userId} = req.body
        const status = enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.send(status);
    });
 
}