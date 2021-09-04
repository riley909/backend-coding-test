import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Location } from './models/locations.model';
import { Store } from './models/stores.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getList(): Store[] {
    return this.appService.getList();
  }

  @Get('/:name')
  getListByName(@Param('name') name: string): Store {
    return this.appService.getListByName(name);
  }

  @Get('location/:postcode')
  getLocation(@Param('postcode') postcode: string): Promise<Location> {
    return this.appService.getLocation(postcode);
  }
}
