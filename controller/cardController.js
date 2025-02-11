const data = require("../models/card");
const cards = data.cards;

module.exports.getNewCard = function(req, res) {
    let index = Math.floor(Math.random() * 5);
    res.render("card", 
        {
            pokemon: cards[index].name, 
            bildName: cards[index].imageName
        });
}

module.exports.getCardAtIndex = function(req, res) {
    const { id }  = req.params;
    res.render("card", 
        {
            pokemon: cards[id].name,
            bildName: cards[id].imageName
        });
}