const weakMap = new WeakMap();
weakMap.set({ protocol: 'http', name: 'getUsers' });
function queryAPI(endpoint) {
  const times = weakMap.get(endpoint);
  if (times === undefined) {
    weakMap.set(endpoint, 1);
    return;
  }
  if (times >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, times + 1);
}
export { weakMap, queryAPI };
