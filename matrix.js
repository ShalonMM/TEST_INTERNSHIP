function squareMatrix(arr) {
  let leftToRight = 0;
  let rightToLeft = 0;

  const n = arr.length;
  for (let i = 0; i < n; i++) {
    leftToRight += arr[i][i];
    rightToLeft += arr[i][n - 1 - i];
  }
  const absSum = Math.abs(leftToRight - rightToLeft);
  return absSum;
}

console.log(
  squareMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
