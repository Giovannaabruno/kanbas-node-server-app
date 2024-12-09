import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function CourseRoutes(app) {
    // Create a new module for a course
    app.post("/api/courses/:courseId/modules", async (req, res) => {
        try {
            const { courseId } = req.params;
            const module = { ...req.body, course: courseId };
            const newModule = await modulesDao.createModule(module);
            res.json(newModule);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Get modules for a course
    app.get("/api/courses/:courseId/modules", async (req, res) => {
        try {
            const { courseId } = req.params;
            const modules = await modulesDao.findModulesForCourse(courseId);
            console.log(modules);
            res.json(modules);
        } catch (error) {
          console.log("modules");
            res.status(500).json({ error: error.message });
        }
    });

    // Get assignments for a course
    app.get("/api/courses/:courseId/assignments", async (req, res) => {
        try {
            const { courseId } = req.params;
            const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
            res.json(assignments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Get user enrollments for a course
    app.get("/api/courses/:courseId/enrollments", async (req, res) => {
        try {
            const {courseId } = req.params;
            const enrollments = await enrollmentsDao.findUsersForCourse(courseId);
            res.json(enrollments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Get all enrollments
    app.get("/api/courses/enrollments", async (req, res) => {
        try {
            const enrollments = await enrollmentsDao.findAllEnrollments();
            res.json(enrollments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Update a course
    app.put("/api/courses/:courseId", async (req, res) => {
        try {
            const { courseId } = req.params;
            const courseUpdates = req.body;
            const status = await dao.updateCourse(courseId, courseUpdates);
            res.json(status);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Delete a course
    app.delete("/api/courses/:courseId", async (req, res) => {
        try {
            const { courseId } = req.params;
            const status = await dao.deleteCourse(courseId);
            res.json(status);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Create a new course and enroll the current user
    app.post("/api/courses", async (req, res) => {
        try {
            const course = await dao.createCourse(req.body);
            const currentUser = req.session?.currentUser;
            if (currentUser) {
                await enrollmentsDao.enrollUserInCourse(currentUser._id, course._id);
            }
            res.json(course);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Get all courses
    app.get("/api/courses", async (req, res) => {
        try {
            const courses = await dao.findAllCourses();
            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Get users enrolled in a course
    app.get("/api/courses/:cid/users", async (req, res) => {
        try {
            const { cid } = req.params;
            const users = await enrollmentsDao.findUsersForCourse(cid);
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
}