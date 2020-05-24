const INVERT = -1;
const NOT_FOUND = -1;

export default class FilterUtil  {
  static sortByParam(array, param, asc) {
    return array.sort((a, b) => {
      let result = 0;
      if (a[param] < b[param]) {
        result = -1;
      } else if (a[param] > b[param]) {
        result = 1;
      }
      return asc ? result : result * INVERT;
    });
  }

  static filterByParam(array, param, str) {
    return array.filter(item => {
      return item[param].toLowerCase().indexOf(str.toLowerCase()) > NOT_FOUND;
    });
  }
}