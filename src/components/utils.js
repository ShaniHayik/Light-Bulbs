export const RandomBlink = (colors) => {
  var random = Math.floor(Math.random() * 6);
  var e = document.getElementById(colors[random]);
//   console.log(e);
  e.className = "fadeOut " + e.id + " btn";
  setTimeout(() => (e.className = "fadeIn " + e.id + " btn"), 100);
  return random;
};
export const blink = (e) => {
  e.className = "fadeOut " + e.id + " btn";
  setTimeout(() => (e.className = "fadeIn " + e.id + " btn"), 100);
};
