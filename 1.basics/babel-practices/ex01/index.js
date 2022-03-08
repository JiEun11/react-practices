const babel = require('@babel/core');

// const fn = function(){
//   return 1;
// }

const result = babel.transform('const fn = () => 1;', {});
console.log(result);