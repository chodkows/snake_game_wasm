import init, { greet } from "snake_game_wasm";

init().then(_ => {
  greet("Wojtek");
  console.log("Ok");
});