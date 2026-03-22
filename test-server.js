import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ message: "Test endpoint working!" });
});

app.listen(PORT, () => {
  console.log(`Minimal server running on port ${PORT}`);
});

console.log("Server file loaded");
