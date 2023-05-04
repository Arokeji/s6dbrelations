const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creacion del esquema del autor
const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: false,
  },
  books: {
    type:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
  }
});

// Creacion del modelo en si con un nombre y la configuracion del esquema
const Author = mongoose.model("Author", authorSchema);

module.exports = { Author };
