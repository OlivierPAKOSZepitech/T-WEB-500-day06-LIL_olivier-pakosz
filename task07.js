export function arrayFiltering(array, test) {
  let toFilter = [];
  for (const element_tableau of toFilter) {
    if (test(element_tableau)) {
      toFilter.push(element_tableau);
    }
  }
  return toFilter;
}

module.exports = { arrayFiltering };
