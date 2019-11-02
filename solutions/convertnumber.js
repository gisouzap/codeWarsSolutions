function digitize(n) {
  //code here
  var array = n.toString().split("").reverse().map(Number);
  return array;
}
