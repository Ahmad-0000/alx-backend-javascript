export default function guardrial(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
  } catch (e) {
    queue.push(`${e.name}: ${e.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
