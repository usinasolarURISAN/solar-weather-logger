import { ResponseErrorHandler } from '../utils';
import api from './axios.instance';

export const fetchCurrentWeather =
  async (): Promise<APIOpenWeatherDefaultResponse> => {
    try {
      const { data } = await api.get<APIOpenWeatherDefaultResponse>('');

      return data;
    } catch (error) {
      console.log(`[API] - Error on fetchCurrentWeather`);
      throw new ResponseErrorHandler(error);
    }
  };
