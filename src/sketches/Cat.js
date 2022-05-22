import React from "react";
import Sketch from "react-p5";

const Cat = (props) => {
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.noLoop();
	};

	const draw = (p5) => {
    p5.blendMode(p5.BLEND);

    let r = p5.random(256);
    let g = p5.random(256);
    let b = p5.random(256);
    p5.background(r, g, b);
    
    p5.fill("#FFFFFF");
    p5.blendMode(p5.DIFFERENCE);
    p5.noStroke();

    const x = p5.width / 2;
    const y = p5.height / 2;
  
    const dim = p5.min(p5.width, p5.height);
    const size = dim * 0.5;
    
    p5.translate(0, 50);
    
    head(p5, x, y, size);
    let top = p5.random(75);
    ear(p5, x, y, size, top, 1);
    ear(p5, x, y, size, -top, -1);
    p5.push();
    p5.translate(0, 22);
    nose(p5, x, y, size);
    whiskers(p5, x, y, size, 8 );
    whiskers(p5, x, y, size, -2.3);
    p5.pop();
    eye(p5, x, y, size, -1.2);
    eye(p5, x, y, size, -0.85);
    mouth(p5, x, y, size);
  }

  function head(p5, x, y, size) {
    p5.push();
    p5.ellipse(x, y, size, size);
    p5.pop();
  }
  
  function ear(p5, x, y, size, top, multiplier) {
    p5.push();
    p5.translate(multiplier * size / 2, -size);
    p5.triangle(
      top + (x + size / 11), y - size / 11,
      x + (-multiplier) * size / 2, y + size / 2,
      x - size / 256, y + size
    );
    p5.pop();
  }
  
  function nose(p5, x, y, size) {
    p5.push();
    p5.ellipse(x, y, size / 7, size / 11);
    p5.translate( 0, 11);
    p5.triangle(
      x, y + size / 11,
      x + size / 14, y - size / 22,
      x - size / 14, y - size / 22
    );
    p5.pop();
  }
  
  function whiskers(p5, x, y, size, multiplier) {
    p5.rect(x + size / multiplier, y, 77, 11, 11);
    p5.rect(x + size / multiplier, y + 22, 77, 11, 11);
  }
  
  function eye(p5, x, y, size, multiplier) {
    p5.push();
    p5.translate(size + (x / multiplier), y  - size);
    p5.triangle(
      x, y - size / 5,
      x + size / 14, y - size / 22,
      x - size / 14, y - size / 22
    );
    p5.pop();
  }
  
  function mouth(p5, x, y, size) {
    let mouthVisibility = p5.random(1);
    if (mouthVisibility > 0.5) {
      p5.ellipse(x, y + 80, size / 7, size / 11);
    }
  }

	return (
    <div>
      <Sketch setup={setup} draw={draw} />
      <p>
        Cat
      </p>
    </div>
  );
};

export default Cat;