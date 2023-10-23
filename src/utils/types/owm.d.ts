/**
 * Default return from the OpenWeatherMap API.
 * 
 * More details about the fields can be found at: https://openweathermap.org/current#current_JSON
 */
declare type APIOpenWeatherDefaultResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  /**
   * Visibiility in meters, max is 10km.
   */
  visibility: number;
  wind: {
    /**
     * Wind speed in m/s.
     */
    speed: number;
    /**
     * Wind direction in deg.
     */
    deg: number;
    /**
     * Wind gust in m/s.
     */
    gust: number;
  };
  rain: {
    /**
     * Rain volume in the last 1hour, in mm.
     */
    "1h": number;
  };
  clouds: {
    /**
     * Cloudliness, in %.
     */
    all: number;
  };
  dt: number;
  sys: { 
    country: string;
    sunrise: number;
    sunset: number;
  },
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
