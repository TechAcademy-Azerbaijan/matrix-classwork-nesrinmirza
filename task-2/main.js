// Use this array for solution
let array = [3, 5, -7, 7, 5, -9, -4]

let arr2 = [];
count = 0;
for (let i = 0; i < arr1.length; i++) {
   if (!arr2.includes(arr1[i])) {
     arr2.push(arr1[i])
     count++;
   }
    
}
console.log(count);
