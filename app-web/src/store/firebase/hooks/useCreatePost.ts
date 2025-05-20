// src/store/firebase/hooks/useCreatePost.ts
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import type { Post } from "../types";
import { db } from "../config";

type CreatePostInput = Omit<Post, "id" | "createdAt">;

export function useCreatePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const createPost = async (data: CreatePostInput) => {
    setLoading(true);
    setError(null);

    console.log('data', data);

    try {
      await addDoc(collection(db, "posts"), {
        ...data,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error al crear post:", err);
      setError("Ocurrió un error al guardar tu publicación.");
    } finally {
      setLoading(false);
    }
  };

  return { createPost, loading, error };
}
