import { UserButton, useUser } from "@clerk/clerk-react";
import { CreatePostForm } from "../../post/components/CreatePostForm";
import { Feed } from "../../feed/components/Feed";

export function Home() {
  const { user } = useUser();

  return (
    <>
      <UserButton />
      <h1>Feed</h1>
      <CreatePostForm userId={user?.id ?? ""} />
      <Feed />
    </>
  )

};
