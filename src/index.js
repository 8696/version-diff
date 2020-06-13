function diffMain(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  //
  let maxLength = Math.max(v1.length, v2.length);
  // 补零
  v1 = v1.concat(new Array(maxLength - v1.length).fill(0)).map(item => Number(item));
  v2 = v2.concat(new Array(maxLength - v2.length).fill(0)).map(item => Number(item));

  let i = 0;
  while (i < maxLength) {
    if (v1[i] < v2[i]) return '<';
    if (v1[i] > v2[i]) return '>';
    i++;
  }
  return '=';
}

function vDiff([min = null, max = null], diff) {
  if (
    // vDiff(['*', '*'], '2.0')
    (min === '*' && max === '*')
    // vDiff(['2.0','2.0'], '2.0')
    || (min === diff && max === diff)) {
    return true;
  }

  if (arguments[0].length === 1) {
    // vDiff(['*'], '2.0')
    return min === '*'
      // vDiff(['2.0'], '2.0')
      || diffMain(min, diff) === '=';
  }

  if (min === '*') {
    // vDiff(['*','1.0'], '0.9')
    return diffMain(diff, max) === '<';
  }

  if (max === '*') {
    // vDiff(['1.0','*'], '1.0')
    return diffMain(diff, min) === '='
      // vDiff(['1.0','*'], '2.0')
      || diffMain(diff, min) === '>';
  }

  // vDiff(['1', '1'], '1.0')
  if (diffMain(min, max) === '=') {
    return diffMain(min, diff) === '=';
  }

  // vDiff(['1.0','2.0'], '1.1')
  return (diffMain(diff, min) === '>' || diffMain(diff, min) === '=')
    && (diffMain(diff, max) === '<');
}

vDiff.main = diffMain;

module.exports = vDiff;
