import "dotenv/config";
import session from "express-session";
import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
const app = express();


app.use(cors({
  credentials: true,
  origin: "https://a4--kanbasreactwebapp-giovanna.netlify.app"
})

);  

app.use(express.json());

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

Hello(app)
Lab5(app);
UserRoutes(app);
CourseRoutes(app);
AssignmentRoutes(app);

EnrollmentRoutes(app);
ModuleRoutes(app);
console.log(`App listening to port ${4000}`)
app.listen(process.env.PORT || 4000);
console.log(`App listening to port ${4000}`)

