import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello 👋 Welcome to my blog
      </h1>
      <p className="mb-4">{`I'm a big handsome guy.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
