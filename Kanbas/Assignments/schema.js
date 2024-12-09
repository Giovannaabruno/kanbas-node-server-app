import mongoose from "mongoose";
const assignnmentSchema = new mongoose.Schema(
 {
   title: String,
   course: {type: mongoose.Schema.Types.ObjectId, ref: "Coursemodel"},
   due_date: String,
   description: String,
   available_date: String,
   points: String,
 },
 { collection: "assignments" }
);
export default assignnmentSchema;