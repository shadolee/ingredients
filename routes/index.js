// Routes/Index.JS is where we make our routes. Routing refers to the definition of application end points (URIs) and how they respond to client requests.

var express = require('express');   // require the express.js framework
var router = express.Router(); // Routing refers to the definition
// of application end points (URIs) and how they respond to client requests.

const Ingredient = require('../models/Ingredient');
// define Ingredient and require model in app
const ingredientController = require('../controllers/ingredientController');
// define ingredientController and require controller in app


/* GET home page. */
router.get('/', ingredientController.getIngredients);

router.post('/', (req, res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/')
  })
})


router.get('/ingredients/:id/edit', (req, res) => {
    Ingredient.findOne({ _id: req.params.id })
      .then(ingredient => {
        res.render('editIngredient', {ingredient: ingredient} );
      })
});

router.post('/ingredients/:id/edit', (req, res) => {
    Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true // returns new ingredient
    })
      .then(ingredient => {
        res.redirect('/')
      })
})

module.exports = router;
