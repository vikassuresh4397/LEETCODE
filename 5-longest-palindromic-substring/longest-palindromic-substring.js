/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  const n = s.length;
  let start = 0;
  let maxLength = 1;
  const table = Array(n)
    .fill(0)
    .map(() => Array(n).fill(false));
    
    console.log(table)

  for (let i = 0; i < n; i++) {
    table[i][i] = true;
  }

  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      table[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  for (let k = 3; k <= n; k++) {
    for (let i = 0; i < n - k + 1; i++) {
      const j = i + k - 1;
      if (table[i + 1][j - 1] && s[i] === s[j]) {
        table[i][j] = true;
        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }

  return s.slice(start, start + maxLength);
};