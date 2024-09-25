function SumPairs(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}

const arr = [1, 2, 3, 4, 5, 6];
const k = 5;

console.log(SumPairs(arr, k));
