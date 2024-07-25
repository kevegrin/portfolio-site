const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public')); // Serve files from the 'public' directory

const projects = require('./projects.json'); // Load the projects data

app.get('/', (req, res) => {
  console.log('Rendering index template...');
  res.render('index', {
    projects: projects
  });
});

app.get('/about', (req, res) => {
    res.render('about');
  });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});