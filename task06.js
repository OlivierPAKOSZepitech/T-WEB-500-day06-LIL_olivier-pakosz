export function objectsDeeplyEqual(cmp1, cmp2) {
  if (cmp1 === cmp2) return true;
  else if (cmp1.length != cmp2.length) {
    return false;
  } else if (
    typeof cmp1 != "object" ||
    typeof cmp2 != "object" ||
    cmp1 == null ||
    cmp2 == null
  ) {
    return false;
  }
  const keys1 = Object.keys(cmp1);
  const keys2 = Object.keys(cmp2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const element of keys1) {
    if (!objectsDeeplyEqual(cmp1[element], cmp2[element])) {
      return false;
    }
  }
  return true;
}
