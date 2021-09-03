import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Store } from './stores.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getList(): Store[] {
    return this.appService.getList();
  }
}
