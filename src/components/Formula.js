import SVG from 'svgjs';

view Formula {
  prop name : String
  prop formula : String

  on.mount(() => drawHexagon(view.element()))

  <div onClick={view.props.onClick} class="overlay-container">
    <div class="content">
      <span>{name}</span>
      <span>{formula}</span>
    </div>
  </div>
}

function drawHexagon(el) {
  const width = el.offsetWidth;
  const height = width / Math.sqrt(3) * 2;
  const hexPath = hexagonPath(width/2, height/2, height/2 - 2);

  const draw = SVG(el).attr({
    'viewBox': '0 0 ' + width + ' ' + height
  });
  const gradient = draw.gradient('linear', (stop) => {
    stop.at(0, '#ef5350');
    stop.at(0.5, '#5c6bc0');
    stop.at(1, '#ab47bc');
  })
  draw.path(hexPath).attr({
    fill: 'transparent',
    stroke: gradient,
    'stroke-width': '1.2%',
  });
}

function hexagonPath(x ,y ,r) {
  var x1 = x;
  var y1 = y - r;
  var x2 = x + (Math.cos(Math.PI/6)*r);
  var y2 = y - (Math.sin(Math.PI/6)*r);
  var x3 = x + (Math.cos(Math.PI/6)*r);
  var y3 = y + (Math.sin(Math.PI/6)*r);
  var x4 = x;
  var y4 = y + r;
  var x5 = x - (Math.cos(Math.PI/6)*r);
  var y5 = y + (Math.sin(Math.PI/6)*r);
  var x6 = x - (Math.cos(Math.PI/6)*r);
  var y6 = y - (Math.sin(Math.PI/6)*r);

  var path =
  'M' + x1 + ' ' + y1 + ' L' +
  x2 + ' ' + y2 + ' L' + x3 +
  ' ' + y3 + ' L' + x4 + ' ' +
  y4 + ' L' + x5 + ' ' + y5 +
  ' L' + x6 + ' ' + y6 + 'z';
  return path;
}
