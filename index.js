const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));

app.use(express.static('/public'));

app.get('/', (req, res) => {
	res.send('/index.html');
})

app.listen(3000, () => {
	console.log('listening on 3000');
})