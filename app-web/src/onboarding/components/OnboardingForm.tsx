import { FormProvider } from "react-hook-form";
import { useOnboardingForm } from "../hooks/useOnboardingForm";

export function OnboardingForm() {
  const { form, onSubmit, previewUrl, inputRef, isLoaded } =
    useOnboardingForm();

  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label>Nombre</label>
          <input type="text" {...register("firstName")} className="input" />
          {errors.firstName && (
            <p className="error">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label>Apellido</label>
          <input type="text" {...register("lastName")} className="input" />
          {errors.lastName && (
            <p className="error">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label>Fecha de nacimiento</label>
          <input type="date" {...register("birthdate")} className="input" />
          {errors.birthdate && (
            <p className="error">{errors.birthdate.message}</p>
          )}
        </div>

        <div>
          <label>Ciudad</label>
          <input
            type="text"
            placeholder="Busca tu ciudad"
            ref={inputRef}
            className="input"
          />
          {errors.city && <p className="error">{errors.city.message}</p>}
        </div>

        <div>
          <label>País</label>
          <input
            type="text"
            {...register("country")}
            readOnly
            className="input bg-gray-100"
          />
        </div>

        <div>
          <label>Latitud</label>
          <input
            type="number"
            {...register("latitude")}
            readOnly
            className="input bg-gray-100"
          />
        </div>

        <div>
          <label>Longitud</label>
          <input
            type="number"
            {...register("longitude")}
            readOnly
            className="input bg-gray-100"
          />
        </div>

        <div>
          <label>Foto de perfil</label>
          <input
            type="file"
            accept="image/*"
            {...register("profileImage")}
            className="input"
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="mt-2 w-32 h-32 rounded-full object-cover"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isLoaded}
          className="btn-primary"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </FormProvider>
  );
}
