export default function cleanSet(set, startString) {
  let str = '';
  if (Boolean(startString) === false) {
    return '';
  }
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      str = `${str}-${element.slice(startString.length)}`;
    }
  });
  return str.slice(1);
}
