export function degreeToPercent(deg: number) {
  return Number(((100 / 270) * deg).toFixed(3)) / 100;
}

export function percentToValue(min: number, max: number, percent: number) {
  const range = max - min;
  return min + percent * range;
}

export function valueToPercent(min: number, max: number, value: number) {
  const range = max - min;
  return (value - min) / range;
}

export function percentToDegree(percent: number) {
  return (percent * 100) / (100 / 270);
}
