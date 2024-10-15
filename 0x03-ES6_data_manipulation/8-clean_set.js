export default function cleanSet(set, startString) {
  let str = '';
  if (typeof startString !== 'string' || Boolean(startString) === false) {
    return '';
  }
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      str = `${str}-${element.slice(startString.length)}`;
    }
  });
  return str.slice(1);
}
