export default function Dashboard() {
  return (
    <div>
      <h1>Hello, {localStorage.getItem("name")}</h1>
    </div>
  );
}
