// src/components/Feed.tsx
import { usePosts } from "../../store/firebase/hooks/usePosts";

export function Feed() {
  const { posts, loading } = usePosts();

  if (loading) return <p className="p-4 text-gray-500">Cargando publicaciones...</p>;
  if (posts.length === 0) return <p className="p-4 text-gray-500">No hay publicaciones aún.</p>;

  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={post.photo}
            alt={post.description}
            className="w-full h-48 object-cover rounded mb-2"
          />

          <p className="text-gray-800 text-base mb-1">{post.description}</p>

          <div className="text-sm text-gray-500">
            <span className="block">📍 {post.city}, {post.country}</span>
            <span>🎯 {post.typeActivity}</span>
          </div>

          <div className="mt-2 text-xs text-gray-400">
            Publicado por: {post.userName} {post.userLastName}
          </div>

          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>❤️ {post.likeCount ?? 0}</span>
            <span>📌 {post.saveCount ?? 0}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
