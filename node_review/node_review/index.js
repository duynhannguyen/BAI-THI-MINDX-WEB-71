import express from "express";
import { connectToDatabase } from "./db.js";
import appRouter from "./routes/index.js";
const app = express();
connectToDatabase();
app.use(express.json());
app.listen(3000, () => {
  console.log("App is running at 3000");
});

app.use("/api/v1", appRouter);
