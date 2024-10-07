export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const tmpArray = array;
  for (const idx of tmpArray) {
    tmpArray[i] = appendString + idx;
    i += 1;
  }

  return tmpArray;
}
