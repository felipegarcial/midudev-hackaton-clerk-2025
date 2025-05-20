import { UserButton, useUser } from "@clerk/clerk-react";
import { CreatePostForm } from "../../post/components/CreatePostForm";

export function Feed() {
  const { user } = useUser();

  return (
    <>
      <h1>Feed</h1>
      <CreatePostForm userId={user?.id ?? ""} />
      <UserButton />
    </>
  )

};
