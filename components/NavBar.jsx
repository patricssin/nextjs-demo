import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/"
            className="font-bold font-orbitron text-pink-800 hover:underline">
            NextJS Demo
          </Link>
        </li>
        <li className="ml-auto">
          <Link href="/reviews"
            className="text-pink-800 hover:underline">
            Reviews
          </Link>
        </li>
        <li>
          <Link href="/about" prefetch={false}
            className="text-pink-800 hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
