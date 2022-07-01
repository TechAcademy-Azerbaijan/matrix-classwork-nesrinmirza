// let matrix = [
    [134, 475, 30, 424],
    [303, 151, 419, 235],
    [248, 166, 90, 42],
    [318, 237, 184, 36]
];
let left = 0;
let right = 0;
for (let i = 0; i <matrix.length; i++) {
   for (let j = 0; j < matrix[i].length; j++) {
    if (i == j) {
        left = left+ matrix[i][j]
    }
    else if (j == matrix.length-(i+1)) {
        right = right + matrix[i][j]
    }

   }
    
}
console.log(left);
console.log(right);
