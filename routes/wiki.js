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

router.get('/:urlTitle', (req, res, next) => {
    Page.findOne({ where: {urlTitle: req.params.urlTitle} })
        .then(function(foundPage){
            console.log(foundPage);
            res.render('../views/wikipage.html',{
                page: foundPage
            });
          })
          .catch(next);
});

router.post('/', (req, res, next) => {
    const page = Page.build({
        title: req.body.title,
        content: req.body.content
    });

    page.save()  
      .then(function(result){
        res.redirect(result.route); 
      })
      .catch(function errorHandler(err){
          console.log('ERR',err);
        })
});

module.exports = router;