import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../config";
import type { Post } from "../types";



export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...(data as Omit<Post, "id">),
          createdAt: data.createdAt?.toDate?.() ?? new Date(),
        };
      });
      setPosts(results);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { posts, loading };
}
