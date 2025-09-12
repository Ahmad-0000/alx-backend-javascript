export default function iterateThroughObject(reportWithIterator) {
  let string = "";
  const iterator = reportWithIterator[Symbol.iterator]();
  let {value} = iterator.next();
  string += value;
  while ({value} = iterator.next()) {
    string += ` | ${value}`;
  }
  return string;
}
