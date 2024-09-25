function min_max(arr) {
  arr.sort((a, b) => a - b);

  const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);

  const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);

  return `${minSum} ${maxSum}`;
}

console.log(min_max([1, 3, 5, 7, 9]));
