const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const models = require('./models');

const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));

app.use(express.static('/public'));

app.get('/', (req, res) => {
	res.send('/index.html');
})

models.db.sync()//if  uptade model
.then(function () {
    console.log('All tables created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error.bind(console));