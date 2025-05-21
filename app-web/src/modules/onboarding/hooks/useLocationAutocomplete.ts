import { useEffect, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import type { UseFormSetValue } from "react-hook-form";
import type { FormValues } from "../types";

export function useLocationAutocomplete(setValue: UseFormSetValue<FormValues>) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded || !inputRef.current) return;

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      types: ["(cities)"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (
        !place.geometry ||
        !place.geometry.location ||
        !place.address_components
      ) return;

      const city = place.address_components.find((c) =>
        c.types.includes("locality")
      )?.long_name;

      const country = place.address_components.find((c) =>
        c.types.includes("country")
      )?.long_name;

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setValue("city", city || "");
      setValue("country", country || "");
      setValue("latitude", lat);
      setValue("longitude", lng);
    });
  }, [isLoaded, setValue]);

  return { inputRef, isLoaded };
}
