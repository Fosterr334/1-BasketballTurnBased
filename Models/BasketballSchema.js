var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BBallSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    data: Buffer,
    contentType: String,
    required: true
  },
  offense: {
    type: Number,
    required: true
  },
  defense: {
    type: Number,
    required: true
  },
  support: {
    type: Number,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var BasketballSchema = mongoose.model("BasketballSchema", BBallSchema);

// Export the Article model
module.exports = BasketballSchema;
