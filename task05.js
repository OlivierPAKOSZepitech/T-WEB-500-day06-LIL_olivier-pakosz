function range(start, end, step) {
  var array = [];
  if (step == undefined) {
    step = 1
  }
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    }
  } else if (step < 0) {
    for (var i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

module.exports = { range }
