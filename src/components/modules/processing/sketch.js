export default (sketch) => {
  let width = 0;
  let height = 0;
  let rects = null;
  let posX = null;
  let posY = null;

  class Rect {
    constructor(_x, _y, _width, _height, _orientation, _direction, _rotationSPeed, _color) {
      this.x = _x;
      this.y = _y;
      this.width = _width;
      this.height = _height;
      this.orientation = _orientation;
      this.direction = _direction;
      this.rotationSpeed = _rotationSPeed;
      this.color = _color;
    }

    update = () => {
      if (this.orientation >= 360) {
        this.orientation = 0;
      } else {
        this.orientation += this.rotationSpeed * this.direction;
      }
    }

    updatePosition = (_x, _y) => {
      this.x = _x;
      this.y = _y;
    }

    display = () => {
      sketch.rectMode(sketch.CENTER);
      sketch.push();
      sketch.translate(this.x, this.y);
      sketch.rotate(sketch.radians(this.orientation));
      sketch.noStroke();
      sketch.fill(this.color);
      sketch.rect(0, 0, this.width, this.height);
      sketch.pop();
    }
  }

  sketch.setup = () => { // eslint-disable-line no-param-reassign
    width = document.getElementById('sketch').clientWidth;
    height = document.getElementById('sketch').clientHeight;
    sketch.createCanvas(width, height);
    rects = [];
    posX = [];
    posY = [];
    let x = 0;
    let y = 0;
    let item = 0;
    const itemPerLine = 6;
    for (let i = 0; i < itemPerLine; i += 1) {
      for (let j = 0; j < itemPerLine; j += 1) {
        rects[item] = new Rect(
          x,
          y,
          width / 2,
          height / 2,
          sketch.random(0, 360),
          item % 2 === 0 ? -1 : 1,
          0.25,
          item % 2 === 0 ? sketch.color(255, 0, 0, 5) : sketch.color(0, 0, 255, 5),
        );
        x += (width / itemPerLine) + ((width / itemPerLine) / itemPerLine);
        posX[item] = rects[item].x;
        posY[item] = rects[item].y;
        item += 1;
      }
      x = 0;
      y += (height / itemPerLine) + ((height / itemPerLine) / itemPerLine);
    }
  };

  sketch.draw = () => { // eslint-disable-line no-param-reassign
    sketch.background(255);
    for (let i = 0; i < rects.length; i += 1) {
      rects[i].update();
      rects[i].display();
    }
  };

  sketch.mouseMoved = () => { // eslint-disable-line no-param-reassign
    for (let i = 0; i < rects.length; i += 1) {
      if (i % 2 === 0) {
        rects[i].updatePosition(
          sketch.map(sketch.mouseX, 0, width, posX[i], posX[i] + (width / 10)),
          sketch.map(sketch.mouseY, 0, width, posY[i], posY[i] + (height / 10)),
        );
      } else {
        rects[i].updatePosition(
          sketch.map(sketch.mouseX, 0, width, posX[i], posX[i] - (width / 10)),
          sketch.map(sketch.mouseY, 0, width, posY[i], posY[i] - (height / 10)),
        );
      }
    }
  };

  sketch.windowResized = () => { // eslint-disable-line no-param-reassign
    sketch.setup();
  };
};
