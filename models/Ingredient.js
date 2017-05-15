// define mongoose and require in variable,
// Mongoose provides a straight-forward, schema-based solution to model your application data.
const mongoose = require('mongoose');
// destructuring = it’s a JavaScript expression that allows us to extract data from arrays, objects, maps and sets.
// otherwise we could do,  var Schema = mongoose.Schema; comes in more handy if have longer list of things to define.
// good reference: http://wesbos.com/destructuring-objects/ 
const { Schema } = mongoose;



// create a schema for our Ingredient model
// schema = a representation of your existing data format of an outline or model.
const ingredientSchema = new Schema({
  name: {
    type: String,
    trim: true // if name = ".     Sugar" it will trim whitespaces
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})
// here we package our model into a schema
const Ingredient = mongoose.model('Ingredient', ingredientSchema);
// export our schema so other files can use it
module.exports = Ingredient;
