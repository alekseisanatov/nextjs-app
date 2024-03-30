import Link from "next/link";

export const TheHeader = () => {
  return (
    <header className="flex justify-center align-middle gap-4 py-6 bg-gray-500">
      <Link className="text-white text-ms hover:underline" href="/">
        Home
      </Link>
      <Link className="text-white text-ms hover:underline" href="/blog">
        Blog
      </Link>
      <Link className="text-white text-ms hover:underline" href="/about">
        About
      </Link>
    </header>
  );
};
