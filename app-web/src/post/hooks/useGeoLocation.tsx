// src/hooks/useGeoLocation.ts
import { useEffect, useState } from "react";

type Location = {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
};

export function useGeoLocation() {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      try {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

        const res = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
        );

        const data = await res.json();

        if (data.status === "OK") {
          const result = data.results.find((r: any) =>
            r.types.includes("locality") || r.types.includes("administrative_area_level_1")
          );

          const addressComponents = result?.address_components || [];

          const city =
            addressComponents.find((c: any) =>
              c.types.includes("locality")
            )?.long_name ||
            addressComponents.find((c: any) =>
              c.types.includes("administrative_area_level_1")
            )?.long_name ||
            "Desconocido";

          const country = addressComponents.find((c: any) =>
            c.types.includes("country")
          )?.long_name || "Desconocido";

          setLocation({ latitude, longitude, city, country });
        }
      } catch (error) {
        console.error("Error al obtener ubicación:", error);
      }
    });
  }, []);

  return location;
}
