import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";
import morgan from "morgan";

const app = express();
/* Error handle manually 
app.get("/", async (req, res) => {
  try {
    throw Error("Bazinga!");
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) errorMessage = error.message;
    res.status(500).json({ error: errorMessage });
  }
});
*/

// Error Handle with express -> routes/notes.ts
/*
app.get("/", (req, res, next) => {
  try {
    // throw Error("Bazinga!");
    const notes = NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    // this is an express middleware
    next(error);
  }
});
*/

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", notesRoutes);

app.use((req, res, next) => {
  next(Error("Endpoint not found!"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMessage = "An unknown error occurred";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
