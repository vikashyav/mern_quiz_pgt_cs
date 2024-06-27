import fs from "fs"
// const path = require('path');
import path from "path"
import express from "express";
const __dirname = path.resolve();
const port = process.env.PORT || 3000;
// const __dirname = path.resolve();
const app = express();

// const app = http.createServer()

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'dist')));

// Handle other requests by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
