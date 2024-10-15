export default function updateUniqueItems(map) {
  const unique = [];
  if (map.toString() !== '[object Map]') {
    return;
  }
  map.forEach((value, key) => {
    if (value === 1) {
      unique.push(key);
    }
  });
  unique.forEach((key) => map.set(key, 100));
}
