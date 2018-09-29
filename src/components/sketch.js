export default (sketch) => {
  let width = 0;
  let height = 0;

  sketch.setup = () => { // eslint-disable-line no-param-reassign
    width = document.getElementById('sketch').clientWidth;
    height = document.getElementById('sketch').clientHeight;
    sketch.createCanvas(width, height);
  };

  sketch.draw = () => { // eslint-disable-line no-param-reassign
    sketch.fill(0);
    sketch.ellipse(sketch.random(0, width), sketch.random(0, height), 10, 10);
  };
};
