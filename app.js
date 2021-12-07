const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());


app.use('/', (req, res) => {
   res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(port, () => {
   console.log('Server listening at port ' + port);
});