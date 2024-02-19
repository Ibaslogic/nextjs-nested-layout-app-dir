export default async function Revenue() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error();
  return <h2>Revenue metrics</h2>;
}
