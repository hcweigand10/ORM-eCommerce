const router = require("express").Router();
const { Tag, Product } = require('../../models');
const db = require("../../config/connection");


// The `/api/tags` endpoint

// get all tags
router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({
    include: [Product],
  }).then((tag) => {
    res.json(tag);
  }).catch((err) => {
    // console.log(err);
    res.status(400).json(err);
  });
});

// get one tag
router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: { id: req.params.id },
    include: [Product],
  }).then((tag) => {
    res.json(tag);
  }).catch((err) => {
    // console.log(err);
    res.status(400).json(err);
  });
});

// create new tag
router.post("/", (req, res) => {
  Tag.create(req.body).then((tag) => {
    res.json(tag)
  });
});

// update tag
router.put("/:id", (req, res) => {
  // update tag data
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => {
      // find all associated products from tag *** HELP (do i even need this? still curious how to where: array.conatins)
      res.json(tag)      //Product.findAll({ where: { tags: req.params.id } }));
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one tag by its `id` value
  Tag.destroy({
    where: { id: req.params.id },
  }).then((tag) => {
    res.status(200).json(tag)
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });;
});

module.exports = router;
