import { AppService } from './app.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller()
export class AppController {
  appService: AppService;
  constructor(appService: AppService) {
    this.appService = appService;
  }

  @Get()
  async getHello(@Query('name') name: string) {
    return await this.appService.sendMessage(name);
  }
}
