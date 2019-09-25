const express = require('expres');
const morgan = require('morgan');

const app = express();
const PORT = 8000;

app.use(morgan('dev'));

app.get('/', ( req, res ) => {
  res.send('Hello Express!');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));