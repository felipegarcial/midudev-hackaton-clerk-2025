export async function updateUserMetadata(token: string, data: {
    city: string;
    country: string;
    language: string;
    latitude: number;
    longitude: number;
    onboardingCompleted: boolean;
  }) {
    const response = await fetch("http://localhost:3000/api/update-metadata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error al actualizar metadatos");
    }
  
    return response.json();
  }
  