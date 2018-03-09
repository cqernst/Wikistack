const Express = require('express');
const Morgan = require('morgan');
const app = Express();
const Body-parser = require('body-parser');

const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(morgan('dev'));

app.use(express.static(path.join(_dirname, '/public')));

app.get('/', (req, res) => {
	res.send('/index.html');
})