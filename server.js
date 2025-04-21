import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 8080;

// app.use(express.json());
const allowedOrigins = ['http://localhost:5173', 'https://caiosribeirojp.com'];
app.use(cors({
  origin: allowedOrigins,
}));

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
