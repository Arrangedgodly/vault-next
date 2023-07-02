import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-3xl italic">Page not found</p>
      </div>
    </div>
  );
}
