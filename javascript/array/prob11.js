// let movies = ["Bahubali", "Avengers", "Pushpa", "KGF"];

// // Print all the movies except Avengers

// for (let i = 0; i <= movies.length - 1; i++) {
//   if (movies[i] == "Avengers" || movies[i] == "KGF") {
//     continue;
//   }
//   console.log(movies[i]);
// }



let arr = [1, 5, 7, 8, 9, 0,12,18];

// print the first half of the array
let start = 0;
let end = arr.length / 2 - 1;  //6/2-1  3-1 2
// console.log(end)

for (let i = start; i <= end; i++) {
  console.log(arr[i]);
}