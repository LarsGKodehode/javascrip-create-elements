function createGame() {
  let stage = 0;
  let state = {
    cards: [true, false],
  };

  function next() {}

  return {
    next,
  };
}

const game1 = createGame();
const game2 = createGame();

for (let index = 0; index < array.length; index++) {
  console.log("Pre game setup");
  const newGame = createGame();
  console.log("Post game teardown");
}

class Game {
  constructor(initalState) {
    this.state = initalState;
  }

  next() {}
}

const game3 = new Game({ doors: [] });
