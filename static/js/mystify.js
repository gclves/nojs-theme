ready(() => {
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const state = initializeState(canvas);
  setInterval(() => update(state), 1000 / 30);
});

function update({ paused, ...state }) {
  if (paused) { return; }
  const { ctx, lines } = state;

  ctx.fillStyle = 'black';
  ctx.globalAlpha = 0.02;
  ctx.fillRect(0, 0, state.width, state.height);
  ctx.globalAlpha = 1;

  lines.forEach(line => {
    let { x1, y1, vx1, vy1, x2, y2, vx2, vy2 } = line;

    line.x1 += vx1;
    line.y1 += vy1;
    line.x2 += vx2;
    line.y2 += vy2;

    if (line.x1 < 0 || line.x1 > state.width) {
      line.vx1 *= -1;
    }
    if (line.y1 < 0 || line.y1 > state.height) {
      line.vy1 *= -1;
    }
    if (line.x2 < 0 || line.x2 > state.width) {
      line.vx2 *= -1;
    }
    if (line.y2 < 0 || line.y2 > state.width) {
      line.vy2 *= -1;
    }

    ctx.strokeStyle = line.color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  });
}

function initializeState(canvas) {
  const { width, height } = canvas;
  const ctx = canvas.getContext('2d');
  let paused = false;

  const colors = ['cyan', 'yellow', 'magenta'];
  const state = {
    ctx,
    paused,
    width, height,
    lines: colors.map(color => makeLine(color, width, height)),
  };

  canvas.addEventListener('click', () => {
    state.paused = !state.paused;
  }, false);
  ctx.fillRect(0, 0, width, height);

  return state;
}

function makeLine(color, width, height) {
  return {
    color,
    x1: randomTo(width), y1: randomTo(height),
    vx1: 5 - randomTo(10), vy1: 5 - randomTo(10),
    x2: randomTo(width), y2: randomTo(height),
    vx2: 5 - randomTo(10), vy2: 5 - randomTo(10),
  }
}

function randomTo(max) {
  return Math.random() * max;
}
