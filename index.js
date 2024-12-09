import "dotenv/config";
import session from "express-session";
import express from 'express';
import mongoose from "mongoose";
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import MongoDBStore from 'connect-mongodb-session'
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING ||
  "mongodb+srv://giovannaabruno:GB919jet@kanbas.71bny.mongodb.net/?retryWrites=true&w=majority&appName=kanbas"
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors({
  credentials: true,
  origin: process.env.NETLIFY_URL || "https://a6--kanbasreactwebapp-giovanna.netlify.app"
})

);
const store = new MongoDBStore({
  uri: process.env.CONNECTION_STRING ||
    "mongodb+srv://giovannaabruno:GB919jet@kanbas.71bny.mongodb.net/?retryWrites=true&w=majority&appName=kanbas"
  , collections: 'sessions',
});

app.use(express.json());

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: true,
  store,
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

