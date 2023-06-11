const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

//Path is /cubes/create
router.get('/create', (req, res) =>{
    console.log(cubeManager.getAll());
    res.render('create');
});

router.post('/create', (req, res) =>{
    const { 
        name, 
        description, 
        imageUrl, 
        difficultyLevel,
    } = req.body;
    
    cubeManager.create({ 
        name, 
        description, 
        imageUrl, 
        difficultyLevel: Number(difficultyLevel),
    });
    res.redirect('/');
});

module.exports = router;