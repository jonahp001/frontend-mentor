import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('this is a test for response');
});

app.listen(8080, () => {
  console.log('Listening on Port 8080!');
});
