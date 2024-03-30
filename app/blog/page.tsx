import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1 className="text-center m-4 font-bold text-3xl">Blog Page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link
              className="text-center hover:underline"
              href={`/blog/${post.id}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
