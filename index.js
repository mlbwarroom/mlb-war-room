const express = require('express');
const app = express();

// Default route
app.get('/', (req, res) => {
  res.send('MLB Prop Database Setup');
});

// Use environment variable for the port, fallback to 3000 if not provided
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
