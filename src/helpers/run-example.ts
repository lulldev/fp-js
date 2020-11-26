export function runExample(func: Function, description?: string) {
  console.log(`Run:${func.name ? func.name : ''} ${description ? description : ''}. Output:`, func());
}