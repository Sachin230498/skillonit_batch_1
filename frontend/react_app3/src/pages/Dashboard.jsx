export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome {user?.email}</h1>
      <p className="mt-2">This is your dashboard.</p>
    </div>
  );
}
