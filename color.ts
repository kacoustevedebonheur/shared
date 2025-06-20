export type RgbColor = Record<'r' | 'g' | 'b', number>;

export function hexColorToRgb(color: string): RgbColor {

  if (color.includes('#')) {
    color = color.replace('#', '');
  }

  var r = parseInt(color[0] + '' + color[1], 16);
  var g = parseInt(color[2] + '' + color[3], 16);
  var b = parseInt(color[4] + '' + color[5], 16);

  return { r, g, b };
}

export function getContrast(hexColor: string) {
  const color = hexColorToRgb(hexColor);
  return (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
}
