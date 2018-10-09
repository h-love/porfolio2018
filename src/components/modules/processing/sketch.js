export default (sketch) => {
  let width = 0;
  let height = 0;
  let rects = [];
  let rectsEnd = [];
  const stars = [];
  let posX = null;
  let posY = null;
  const ScrollBegin = document.body.clientHeight - (2 * window.innerHeight);
  const ScrollEnd = document.body.clientHeight - window.innerHeight;

  class Star {
    constructor(_x, _y, _z, _color) {
      this.x = _x;
      this.y = _y;
      this.z = _z;
      this.color = _color;
      this.pz = _z;
    }

    updateColorAlpha = (_alpha) => {
      this.color.setAlpha(_alpha);
    }

    update = () => {
      this.z -= 100;
      if (this.z < 1) {
        this.x = sketch.random(-width, width);
        this.y = sketch.random(-height, height);
        this.z = sketch.random(width);
        this.pz = this.z;
      }
    }

    display = () => {
      sketch.fill(this.color);
      sketch.noStroke();

      sketch.push();
      sketch.translate(width / 2, height / 2);
      const sx = sketch.map(this.x / this.z, 0, 1, 0, width);
      const sy = sketch.map(this.y / this.z, 0, 1, 0, height);
      sketch.ellipse(sx, sy, 1, 1);

      const px = sketch.map(this.x / this.pz, 0, 1, 0, width);
      const py = sketch.map(this.y / this.pz, 0, 1, 0, height);
      this.color.setAlpha(sketch.map(this.z, 0, width, 0, 100));
      sketch.stroke(this.color);
      sketch.line(px, py, sx, sy);
      sketch.pop();
    }
  }

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

    updateColorAlpha = (_alpha) => {
      this.color.setAlpha(_alpha);
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
    rectsEnd = [];
    posX = [];
    posY = [];
    let x = 0;
    let y = 0;
    let item = 0;
    const itemPerLine = 6;

    for (let i = 0; i < 200; i += 1) {
      stars[i] = new Star(
        sketch.random(-width, width),
        sketch.random(-height, height),
        sketch.random(width),
        i % 2 === 0 ? sketch.color(255, 0, 0, 0) : sketch.color(0, 0, 255, 0),
      );
    }

    for (let i = 0; i < 10; i += 1) {
      rectsEnd[i] = new Rect(
        width / 2,
        height / 2,
        width / 2,
        height / 2,
        sketch.random(0, 360),
        i % 2 === 0 ? -1 : 1,
        0.25,
        i % 2 === 0 ? sketch.color(255, 0, 0, 0) : sketch.color(0, 0, 255, 0),
      );
    }

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

    if (scrollY > ScrollBegin) {
      for (let i = 0; i < rectsEnd.length; i += 1) {
        rectsEnd[i].updateColorAlpha(sketch.map(scrollY, ScrollBegin, ScrollEnd, 0, 10));
        rectsEnd[i].update();
        rectsEnd[i].display();
      }
      for (let i = 0; i < stars.length; i += 1) {
        stars[i].updateColorAlpha(sketch.map(scrollY, ScrollBegin, ScrollEnd, 0, 100));
        stars[i].update();
        stars[i].display();
      }
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
