import { CreatePostForm } from "../../modules/post/components/CreatePostForm";
import { Feed } from "../../modules/feed/components/Feed";
import { Layout } from "../../common/components";

export function Home() {
  return (
    <Layout>
      <main className="flex flex-row gap-4">
        <section className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-sm w-1/4">
          
        </section>
        <section className="flex flex-col gap-4 p-4 w-3/4">
          <CreatePostForm />
          <Feed />
        </section>
      </main>
    </Layout>
  );
}
