function Card(name, imageName) {
    this.name = name;
    this.imageName = imageName;
}

const cards = [
    new Card("Pickachu",    "pokemon-0001.jpg"),
    new Card("Magnemite",   "pokemon-0002.jpg"),
    new Card("Charmander",  "pokemon-0003.jpg"),
    new Card("Mewtwo",      "pokemon-0004.jpg"),
    new Card("Squirtle",    "pokemon-0005.jpg"),
    new Card("Bulbasaur",   "pokemon-0006.jpg"),
];

module.exports = {
    cards: cards,
    Card: Card,
}