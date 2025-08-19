// For 문
// for(let i = 0; i < 5; i++) {
//   console.log(i + 1);
// }

// for(let i = 1; i < 6; i++) {
//   console.log(i);
// }

// for(let i = 0; i < 5; ++i) {
//   if (i >= 3) {
//     break;
//   }
//   console.log(i);
// }

for(let i = 0; i < 5; ++i) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}