import { Injectable } from '@nestjs/common';
import * as data from '../stores.json';
import { Store } from './stores.model';

@Injectable()
export class AppService {
  getList(): Store[] {
    return data;
  }
}
