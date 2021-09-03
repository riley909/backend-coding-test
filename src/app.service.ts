import { Injectable } from '@nestjs/common';
import * as data from '../stores.json';
import { Store } from './stores.model';

@Injectable()
export class AppService {
  getList(): Store[] {
    return data;
  }

  getListByName(name: string): Store {
    return data.find((item) => item.name === name);
  }
}
