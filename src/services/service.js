import { API_PAGES, API_SERVICES } from "../config/const";

export async function servicesAll() {
  try {
    const response = await fetch(`${API_SERVICES}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}

export async function pagesAll() {
  try {
    const response = await fetch(`${API_PAGES}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}
