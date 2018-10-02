export default (sketch) => {
  let width = 0;
  let height = 0;
  // let saveX = 0;
  // let saveY = 0;
  let dots;

  class Dot {
    constructor(_width, _height, _x, _y, _orientation, _color) {
      this.width = _width;
      this.height = _height;
      this.x = _x;
      this.y = _y;
      this.orientation = _orientation;
      this.color = _color;
    }

    update = () => {
      // if (saveX > sketch.mouseX || saveY > sketch.mouseY) {
      //   this.orientation -= 1;
      // } else {
      //   this.orientation += 1;
      // }

      if (this.orientation >= 360) {
        this.orientation = 0;
      } else {
        this.orientation += 1;
      }
    }

    display = () => {
      sketch.rectMode(sketch.CENTER);
      sketch.push();
      sketch.translate(this.width, this.height);
      sketch.rotate(sketch.radians(this.orientation));
      sketch.noStroke();
      sketch.fill(this.color);
      sketch.rect(0, 0, this.x, this.y);
      sketch.pop();
    }
  }

  sketch.preload = () => { // eslint-disable-line no-param-reassign
  };

  sketch.setup = () => { // eslint-disable-line no-param-reassign
    width = document.getElementById('sketch').clientWidth;
    height = document.getElementById('sketch').clientHeight;
    sketch.frameRate(10);
    sketch.createCanvas(width, height);
    dots = [];
    let x = 0;
    let y = 0;
    let item = 0;
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        dots[item] = new Dot(x,
          y,
          width / 2,
          height / 2,
          sketch.random(0, 360),
          item % 2 === 0 ? sketch.color(255, 0, 0, 5) : sketch.color(0, 0, 255, 5));
        x += (width / 8) + ((width / 8) / 8);
        item += 1;
      }
      x = 0;
      y += (height / 8) + ((height / 8) / 8);
    }
  };

  sketch.draw = () => { // eslint-disable-line no-param-reassign
    sketch.background(255);
    for (let i = 0; i < dots.length; i += 1) {
      dots[i].update();
      dots[i].display();
    }
  };

  //  sketch.mouseMoved = () => { // eslint-disable-line no-param-reassign
  //    for (let i = 0; i < dots.length; i += 1) {
  //      dots[i].update();
  //    }
  //    saveX = sketch.mouseX;
  //    saveY = sketch.mouseY;
  //  };
};
