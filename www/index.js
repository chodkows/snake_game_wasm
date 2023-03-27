import init, { World } from "snake_game_wasm";

init().then(_ => {
  const CELL_SIZE = 10;

  const world = World.new();
  const worldWith = world.width();

  const canvas = document.getElementById("snake-canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = worldWith * CELL_SIZE;
  canvas.width = worldWith * CELL_SIZE;

  function drawWorld() {
    ctx.beginPath();
    for (let x = 0; x< worldWith + 1; x++) {
      ctx.moveTo(CELL_SIZE * x, 0);
      ctx.lineTo(CELL_SIZE * x, worldWith * CELL_SIZE);
    }

    for (let y = 0; y< worldWith + 1; y++) {
      ctx.moveTo(0, CELL_SIZE * y);
      ctx.lineTo (worldWith * CELL_SIZE,  CELL_SIZE * y);

    }
    ctx.stroke();
  }
  function drawSnake() {
    const snakeIdx = world.snake_head_idx();
    const col = snakeIdx % worldWith;
    const row = Math.floor(snakeIdx / worldWith);

    ctx.beginPath();
    ctx.fillRect(
      col * CELL_SIZE,
      row * CELL_SIZE,
      CELL_SIZE,
      CELL_SIZE
    )
    ctx.stroke()
  }
  drawWorld();
  drawSnake();
});