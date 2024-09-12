import { ref } from 'vue';

export const useCountries = () => {
  const isLoading = ref<boolean>(false);

  const getCountries = async (endpoint: string): Promise<Country[]> => {
    isLoading.value = true;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}${endpoint}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data: Country[] = await response.json();
      return data;
    } catch (error) {
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    getCountries,
    isLoading
  };
};
