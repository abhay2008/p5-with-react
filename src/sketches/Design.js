import React from "react";
import Sketch from "react-p5";

const Design = (props) => {
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
    
    p5.rectMode(p5.CENTER);
    p5.rect(x, y, size, size);
    
    p5.push();
    p5.translate(size / 4, size / 4);
    p5.ellipse(x, y, size, size);
    p5.pop();
    
    p5.push();
    p5.translate(-size / 4, -size / 4);
    p5.triangle(
      x, y - size / 2,
      x + size / 2, y + size / 2,
      x - size / 2, y + size / 2
    );
    p5.pop();
	};

	return (
    <div>
      <Sketch setup={setup} draw={draw} />
      <p>
        Nice Design
      </p>
    </div>
  );
};

export default Design;