const cookingTimes = (eggs) => {
  if (eggs <= 0) {
    return 0;
  } else if (eggs <= 8) {
    return 5;
  } else if (eggs % 8 == 0) {
    return (eggs / 8) * 5;
  } else {
    let waktu = eggs % 8;
    let total = (((eggs - waktu) / 8) * 5) + 5
    return total;
  }
}
const multiply = (x) => {
  if (x % 3 == 0 && x % 5 == 0) {
    return "BangBoom"
  } else if (x % 3 == 0) {
    return "Bang"
  } else if (x % 5 == 0) {
    return "Boom"
  } else {
    return 'Miss'
  }
}



function backAndForthThenReverseDivideConquer(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  const sortedLeft = backAndForthThenReverseDivideConquer(left);
  const sortedRight = backAndForthThenReverseDivideConquer(right);
  return mergeBackAndForth(sortedLeft, sortedRight);
}

function mergeBackAndForth(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (i % 2 === 0) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  result.push(...left.slice(i));
  result.push(...right.slice(j));
  return result;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
const outputArray = backAndForthThenReverseDivideConquer(inputArray);

console.log(outputArray); // [1, 8, 2, 7, 3, 6, 4, 5]
