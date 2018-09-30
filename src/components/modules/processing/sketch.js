export default (sketch) => {
  let width = 0;
  let height = 0;
  const str = '01101100011011110111011001100101';
  let strWidth;
  let x = 0;
  let y = 10;

  sketch.setup = () => { // eslint-disable-line no-param-reassign
    width = document.getElementById('sketch').clientWidth;
    height = document.getElementById('sketch').clientHeight;
    sketch.createCanvas(width, height);
    sketch.textFont('Rhodium Libre');
    strWidth = sketch.textWidth(str);
    for (let i = 0; i < height / 10; i += 1) {
      for (let j = 0; j < width / strWidth; j += 1) {
        sketch.fill(230);
        sketch.text(str, x, y);
        x += strWidth;
      }
      x = 0;
      y += 10;
    }
  };

  sketch.draw = () => { // eslint-disable-line no-param-reassign
  };
};
