import { defineStore } from 'pinia';
import { useAxios } from '@/composables/useAxios';

export const useStore = defineStore<'main', PiniaState>({
  id: 'main',
  state: (): PiniaState => ({
    countries: [],
    loading: false,
    error: null,
  }),
  actions: {
    async getCountries(endpoint: string) {
      const { data, error, loading, request } = useAxios<Country[]>();
      this.loading = true;
      this.error = null;

      try {
        await request('GET', `${import.meta.env.VITE_BASE_URL}/${endpoint}`);
        this.countries = data.value || [];
      } catch (err) {
        this.error = error.value || 'An error occurred';
      } finally {
        this.loading = loading.value;
      }
    },
  },
  getters: {}
});