function permuteString(str) {
  const result = [];

  function helper(chars, left, right) {
    if (left === right) {
      result.push(chars.join(''));
      return;
    }

    for (let i = left; i <= right; i++) {
      [chars[left], chars[i]] = [chars[i], chars[left]]; 
      helper(chars, left + 1, right);
      [chars[left], chars[i]] = [chars[i], chars[left]];
    }
  }

  helper(str.split(''), 0, str.length - 1);
  return result;
}

console.log(permuteString("ABC"));
