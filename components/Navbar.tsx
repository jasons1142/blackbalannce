import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-400 py-4">
      <div className=" flex justify-center space-x-6 w-full">
        <Link href="/">Home</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/forum">Forum</Link>
      </div>
    </nav>
  );
}