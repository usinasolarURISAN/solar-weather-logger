import { MainDataSource } from '../database/datasources';
import { Weather } from '../models';

class WeatherController {
  async save(requestData: Partial<Weather>) {
    await MainDataSource.manager.save(Weather, requestData);
  }
}

export { WeatherController };
