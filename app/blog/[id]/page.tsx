import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

export async function generateMetadata({ params: { id } }: Props) {
  const post = await getData(id);
  return {
    title: post.title + " | Next App",
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <div className="bg-white">
      <h1 className="text-center m-4 font-bold text-3xl">{post.title}</h1>
      <p className="text-center">{post.body}</p>
    </div>
  );
}
