export default async function Users() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <h2>users notifications</h2>;
}
