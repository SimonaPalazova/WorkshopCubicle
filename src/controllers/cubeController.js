const router = require('express').Router();

//Path is /cubes/create
router.get('/create', (req, res) =>{
    res.render('create');
});

module.exports = router;