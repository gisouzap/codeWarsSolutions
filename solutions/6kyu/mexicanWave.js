function wave(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let aux = str.split("");
    if (!(aux[i] === " ")) {
      aux[i] = aux[i].toUpperCase();
      arr.push(aux.join(""));
    }
  }
  console.log(arr);
  return arr;
}

wave("giselle");
