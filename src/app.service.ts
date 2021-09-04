import { Injectable } from '@nestjs/common';
import * as data from '../stores.json';
import { Store } from './models/stores.model';
import axios, { AxiosResponse } from 'axios';
import { Location } from './models/locations.model';

@Injectable()
export class AppService {
  getList(): Store[] {
    return data;
  }

  getListByName(name: string): Store {
    return data.find((item) => item.name === name);
  }

  async getLocation(postcode: string): Promise<Location> {
    const res: AxiosResponse = await axios.get(
      `https://api.postcodes.io/postcodes/${postcode}`,
    );
    const { longitude, latitude } = res.data.result;
    return { longitude, latitude };
  }
}
