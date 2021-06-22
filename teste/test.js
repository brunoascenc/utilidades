// function myFunction(str, str2) {
//   const removingSpecial1 = str.replace(/[^a-zA-Z ]/g, '');
//   const removingSpecial2 = str2
//     .replace(/[^a-zA-Z ]/g, '')
//     .split('')
//     .reverse('')
//     .join('');
//   const xdString = str2.split('');
//   const array = xdString.reverse();
//   const asas = xdString.join('');

//   return removingSpecial1 + removingSpecial2;
// }

// console.log(myFunction('jav%a', 'tpi%rcs'));

// function myFunction({ num, per }) {
//   return (num / 100) * per;
// }

// console.log(myFunction({ num: 100, per: 50 }));

// function countCharacter(str, char) {
//   var idx = str.indexOf(char);
//   return idx == -1 ? 0 : 1 + countCharacter(str.substr(idx + 1), char);
// }

// console.log(countCharacter('aasasccc', 's'));

// function myFunction(num) {
//   for (let i = 2; i < num; i++) {
//     while (num % i === 0) {
//       num++;
//       if (!num % i === 0) {
//         return num > 1;
//       }
//     }
//   }
//   return num;
// }
// console.log(myFunction(115));

// function myFunction(str) {
//   const alph = str.split('');

//   return alph.sort();
// }

// console.log(myFunction('abfdefgcc'));

// function myFunction([...nums]) {
//   const desc = nums.sort((a, b) => b - a);
//   return desc;
// }

// function myFunction([...nums]) {
//   const xd = nums.reduce((a, b) => a + b, 0);

//   return xd / nums.length;
// }

// function myFunction([...nums], i) {
//   return nums.slice(-i);
// }

// console.log(myFunction([10, 100, 40, 25], 2));
// program to display fibonacci sequence using recursion
// const fibonacci = (num) => {
//   if (num === 1) {
//     return [0, 1];
//   } else {
//     var s = fibonacci(num - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };
// console.log(fibonacci(8));
