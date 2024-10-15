const weakMap = new WeakMap();
weakMap.set({ protocol: 'http', name: 'getUsers' });
function queryAPI(endpoint) {
  const times = weakMap.get(endpoint);
  if (times === undefined) {
    weakMap.set(endpoint, 1);
    return;
  }
  weakMap.set(endpoint, times + 1);
  if (times >= 5) {
    throw new Error('Endpoint load is high');
  }
}
export { weakMap, queryAPI };
