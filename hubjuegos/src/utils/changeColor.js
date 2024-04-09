// changeColor.js ------> src/utils/changeColor.js

export const changeColorRGB = () => {
  const randomNumber = (min, max) => {
    min = Math.random(min);
    console.log(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
  };

  let R = randomNumber(200, 255);
  let G = randomNumber(200, 255);
  let B = randomNumber(200, 255);

  const color = `rgb(${R},${G},${B})`;
  return color;
};