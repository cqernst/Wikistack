const router = require('express').Router();
const models = require('../models');
const Page = models.Page; 
const User = models.User;

router.get('/', (req, res, next) => {
    res.redirect('/');
});
router.get('/add', (req, res, next) => {
    res.render('../views/addpage.html');
});

router.post('/', (req, res, next) => {
    //console.log('this is req: ' + req.body);
    const page = Page.build({
        title: req.body.title,
        content: req.body.content
    });

    page.save()  
      .then(res.redirect('/'))
      .catch(function errorHandler(err){
          console.log('ERR',err);
        })
});

module.exports = router;