export default function appendToEachArrayValue(array, prependString) {
  for (const [i, value] of array.entries()) {
    array[i] = prependString + value;
  }

  return array;
}
