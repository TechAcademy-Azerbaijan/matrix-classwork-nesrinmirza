let matrix = [
    [4, -2, 5],
    [1, -4, -12],
    [2, 1, -3]
];
let a = 0;
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
   for (let j = 0; j < matrix[i].length; j++) {
    a = matrix[i]
    if (a[j]>0) {
        sum = sum + a[j]
    }
   } 
    }
  console.log(sum);  
