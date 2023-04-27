import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Define your API routes here
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
