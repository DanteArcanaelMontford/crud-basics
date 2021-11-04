const router = require("express").Router();
const CostumersController = require('../controllers/costumers');

router.get("/", (req, res) => {
  res.render("index", {
    title: "Title test",
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Costumers register",
  });
});


router.post('/register/add', CostumersController.add);

module.exports = router;
