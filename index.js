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
import MongoStore from 'connect-mongo'
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING ||
  "mongodb+srv://giovannaabruno:GB919jet@kanbas.71bny.mongodb.net/kanbas?retryWrites=true&w=majority&appName=kanbas"
mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors({
  credentials: true,
  origin: process.env.NETLIFY_URL || "https://a6--kanbasreactwebapp-giovanna.netlify.app"
})

);
// const store = new MongoDBStore({
//   uri: process.env.MONGO_CONNECTION_STRING ||
//     "mongodb+srv://giovannaabruno:GB919jet@kanbas.71bny.mongodb.net/?retryWrites=true&w=majority&appName=kanbas"
//   , collections: 'sessions',
// });
// store.on("error", (error)=>{
//   console.log("error", error)
// })

app.use(express.json());

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_CONNECTION_STRING ||
    "mongodb+srv://giovannaabruno:GB919jet@kanbas.71bny.mongodb.net/?retryWrites=true&w=majority&appName=kanbas"
 
  }),
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

