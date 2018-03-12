const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const models = require('./models');

//middleware
const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(express.static('/public'));

//routes
app.use('/', require('./routes'));
app.use('/wiki', require('./routes/wiki'));
app.use('/user', require('./routes/user'));

app.get('/', (req, res) => {
	res.send('working');
})


models.db.sync({force: true})//if  uptade model
.then(function () {
    console.log('All tables created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error.bind(console));