const strtorev = "Raghvendra singh";
let strleng = strtorev.length;
let tostore = "";
for (let i = strleng - 1; i >= 0; i--) {
  tostore += strtorev[i];
}
console.log(tostore);
