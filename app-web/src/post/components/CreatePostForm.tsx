import { useCreatePostForm } from "../hooks/usCreatePostForm";


export function CreatePostForm({ userId, userName }: { userId: string; userName?: string }) {
  const {
    form: { register, handleSubmit, formState: { errors } },
    onSubmit,
    loading,
    error,
    activityTypes,
    locationReady,
  } = useCreatePostForm(userId, userName);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <textarea
        {...register("description")}
        placeholder="¿Qué estás haciendo o recomendando?"
        className="w-full border p-2 rounded"
      />
      {errors.description && <p className="text-red-500">{errors.description.message}</p>}

      <input
        {...register("photo")}
        placeholder="URL de la imagen"
        className="w-full border p-2 rounded"
      />
      {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}

      <select {...register("typeActivity")} className="w-full border p-2 rounded">
        <option value="">Selecciona tipo de actividad</option>
        {activityTypes.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
      {errors.typeActivity && <p className="text-red-500">{errors.typeActivity.message}</p>}

      <button
        type="submit"
        disabled={loading || !locationReady}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Publicando..." : "Publicar"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}