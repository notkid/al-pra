function strStr(haystack, needle) {
  if (needle === "") return 0;
  let next = getNext(needle);
  let hi = 0;
  let ne = 0;
  while (hi < haystack.length) {
    if (ne === -1 || haystack[hi] === needle[ne]) {
      if (ne === needle.length - 1) return hi - needle.length + 1;
      hi++;
      ne++;
    } else {
      ne = next[ne];
    }
  }
  return -1;
}

function getNext(needle) {
  let i = 0,
    next = [];
  let j = -1;
  next[0] = -1;
  while (i < needle.length) {
    console.log(`i = ${i}, j = ${j}`);
    if (j === -1 || needle[i] === needle[j]) {
      next[++i] = ++j;
    } else {
      j = next[j];
    }
  }
  return next;
}

console.log(getNext("ababc"));
