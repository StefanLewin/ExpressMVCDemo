const express = require("express");
const router = express.Router();
const cardController = require("../controller/cardController");

router.get('/', cardController.getNewCard)
router.get('/:id', cardController.getCardAtIndex)

module.exports = router;