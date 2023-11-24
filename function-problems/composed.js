/*
Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).
*/

function composed(x) {
  return `hx(): fx(gx(x) = ${fx(gx(x))}`;
}

let gx = function (x) {
  x = 2 * x;
  return x; //20
};

function fx(x) {
  x = x + 2;
  return x;
}

let x = 10;
console.log("x: ", x);
console.log(composed(10));
