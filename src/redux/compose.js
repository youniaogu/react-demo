// compose(a, b, c) >>> (args) => a(b(c(..args)))

// function compose(...fns) {
//   if (fns.length === 0) {
//     return (arg) => arg;
//   }

//   if (fns.length === 1) {
//     return fns[0];
//   }

//   return fns.reduce((a, b) => {
//     return (...args) => a(b(...args));
//   });
// }

// 另一种写法
function compose(...fns) {
  if (fns.length === 0) {
    return arg => arg;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  let composeFn = (...args) => fns[0](...args);

  for (let i = 1; i < fns.length; i++) {
    composeFn = composeFn((...args) => fns[i](...args));
  }

  return composeFn;
}

export default compose;
