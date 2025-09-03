import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-red-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">York GNCTR</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/sponsors">Sponsors</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
