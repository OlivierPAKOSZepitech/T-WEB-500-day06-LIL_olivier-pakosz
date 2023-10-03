export function objectsDeeplyEqual(cmp1, cmp2) {
  if (cmp1 === cmp2) {
    return true;
  }

  if (typeof cmp1 !== "object" || typeof cmp2 !== "object") {
    return false;
  }

  if (cmp1 === null || cmp2 === null) {
    return false;
  }

  var keys1 = Object.keys(cmp1);
  var keys2 = Object.keys(cmp2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    var key = keys1[i];
    if (
      !cmp2.hasOwnProperty(key) ||
      !objectsDeeplyEqual(cmp1[key], cmp2[key])
    ) {
      return false;
    }
  }
  return true;
}
