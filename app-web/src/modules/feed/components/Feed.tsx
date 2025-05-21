// src/components/Feed.tsx
import { usePosts } from "../../../store/firebase/hooks/usePosts";
import { CardPost } from "../../../common/components/CardPost";

export function Feed() {
  const { posts, loading } = usePosts();

  if (loading) return <p className="p-4 text-gray-500">Cargando publicaciones...</p>;
  if (posts.length === 0) return <p className="p-4 text-gray-500">No hay publicaciones aún.</p>;

  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-1 w-full">
      {posts.map((post) => (
        <CardPost key={post.id} post={post} /> 
      ))}
    </div>
  );
}
