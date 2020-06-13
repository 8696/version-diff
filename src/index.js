function diffMain(inputVersion) {
  this.is = (diffVersion) => {
    diffVersion = diffVersion.split('-')[0];
    let _base = inputVersion.split('.');
    let _diff = diffVersion.split('.');
    let longSize = Math.max(_base.length, _diff.length);
    _base = _base.concat(new Array(longSize - _base.length).fill(0)).map(i => parseInt(i, 10));
    _diff = _diff.concat(new Array(longSize - _diff.length).fill(0)).map(i => parseInt(i, 10));
    let i = 0;
    while (i < longSize) {
      if (_base[i] > _diff[i]) {
        return 'gt';
      }
      if (_base[i] < _diff[i]) {
        return 'lt';
      }
      i++;
    }
    return 'eq';
  };
  this.gt = (diffVersion) => {
    return this.is(diffVersion) === 'gt';
  };
  this.lt = (diffVersion) => {
    return this.is(diffVersion) === 'lt';
  };
  return this;

}


function vDiff([v1 = null, v2 = null], diff) {

  if (v1 === '*' && v2 === '*') {
    return true;
  }
  if (v1 === diff && v2 === diff) {
    return true;
  }
  if (arguments[0].length === 1) {
    return v1 === '*' || v1 === diff;
  }
  if (v1 === '*') {
    return diffMain(diff).lt(v2);
  }
  if (v2 === '*') {
    return diffMain(diff).is(v1) === 'eq' || diffMain(diff).gt(v1);
  }

  return (diffMain(diff).is(v1) === 'eq' || diffMain(diff).gt(v1))
    && diffMain(diff).lt(v2);
}

module.exports = vDiff;
