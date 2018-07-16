const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
app.use('/users', require('./api/user'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
   res.send('Hello World! \n'); 
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});