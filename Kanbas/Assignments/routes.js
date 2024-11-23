import * as dao from "./dao.js";


export default function AssignmentRoutes(app) {
    app.post("/api/assignments", (req, res) => {
        const assignment = {
          ...req.body,
        
        };
        const newAssignment = dao.createAssignment(assignment);
        res.send(newAssignment);
      });
    
    // app.get("/api/courses/:courseId/modules", (req, res) => {
    //     const { courseId } = req.params;
    //     const modules = modulesDao.findModulesForCourse(courseId);
    //     res.json(modules);
    //   });
    
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const courseUpdates = req.body;
        const status = dao.updateAssignment(assignmentId, courseUpdates);
        res.send(status);
      });
    
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const status = dao.deleteAssignment(assignmentId);
        res.send(status);
      });    
  app.get("/api/assignments", (req, res) => {
    const assignments = dao.findAllAssignments();
    res.send(assignments);
  });
}
