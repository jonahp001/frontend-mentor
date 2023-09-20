import express from 'express';

const app = express();

let nextId = 1;

const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradeList = [];
  for (const grade in grades) {
    gradeList.push(grades[grade]);
  }
  res.json(gradeList);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).send(req.body);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
