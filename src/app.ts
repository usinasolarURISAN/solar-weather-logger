import 'reflect-metadata';
import { WeatherApi } from './api';
import { WeatherController } from './controllers';
import { initializeDatabases } from './database/datasources';
import { Weather } from './models';

const main = async () => {
  await initializeDatabases();
  const convertedData = new Weather();
  const weatherController = new WeatherController();

  try {
    const data = await WeatherApi.fetchCurrentWeather();

    convertedData.clouds_all = data.clouds.all;
    convertedData.main_humidity = data.main.humidity;
    convertedData.main_pressure = data.main.pressure;
    convertedData.main_temp = data.main.temp;
    convertedData.main_tempMax = data.main.temp_max;
    convertedData.main_tempMin = data.main.temp_min;
    convertedData.weather_main = data.weather[0].main;
    convertedData.weather_description = data.weather[0].description;
    convertedData.weather_icon = data.weather[0].icon;
    convertedData.weather_id = data.weather[0].id;
    convertedData.visibility = data.visibility;
    convertedData.wind_deg = data.wind.deg;
    convertedData.wind_speed = data.wind.speed;
  } catch (error) {
    console.log({ error });
    convertedData.api_code = error.cod;
    convertedData.api_message = error.message;
  } finally {
    weatherController.save(convertedData);
  }
};

export default main;
