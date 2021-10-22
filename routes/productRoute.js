const router = require("express").Router();

const product = require("../models/productModel")


// CRUD operations

// /api/products/
// Create product - post 
router.post("/", (req, res) => {
  data = req.body

  product.insertMany(data)
  .then(data => { res.send(data); })
  .catch(err => { res.status(500).send({ message: err.message}) })

})

// READ all products --get

//Read specific product -- get

// Update specific product -- put

// Delete Specific product -- delete

module.exports = router;