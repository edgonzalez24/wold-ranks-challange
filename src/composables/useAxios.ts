import { ref } from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const useAxios = <T>() => {
  const data = ref<T | null>();
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);

  const request = async (
    method: HttpMethod,
    url: string,
    payload?: any,
    config?: AxiosRequestConfig
  ) => {
    loading.value = true;
    error.value = null;
    try {
      let response: AxiosResponse<T>;

      switch (method) {
        case 'GET':
          response = await axios.get(url, config);
          break;
        case 'POST':
          response = await axios.post(url, payload, config);
          break;
        case 'PUT':
          response = await axios.put(url, payload, config);
          break;
        case 'DELETE':
          response = await axios.delete(url, config);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      data.value = response.data;
    } catch (err) {
      error.value = (err as AxiosError).message;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
