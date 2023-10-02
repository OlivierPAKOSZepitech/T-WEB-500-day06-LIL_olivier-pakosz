export function arrayFiltering(array, test) {
    let toFilter = [];
  for (const element_tableau of array) {
    if (test(element_tableau)) {
      toFilter.push(element_tableau);
    }
  }
  return toFilter;
}
