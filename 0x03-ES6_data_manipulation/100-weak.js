const weakMap = new WeakMap();
weakMap.set({ protocol: 'http', name: 'getUsers' });
function queryAPI(endpoint) {
  let times = weakMap.get(endpoint);
  if (times === undefined) {
    weakMap.set(endpoint, 1);
    return;
  }
  times += 1;
  weakMap.set(endpoint, times);
  if (times >= 5) {
    throw new Error('Endpoint load is high');
  }
}
export { weakMap, queryAPI };
