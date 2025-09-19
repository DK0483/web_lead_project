import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('internal/user/health')
  checkUserServiceHealth() {
    console.log('LOG: Health check received for User Service');
    return { status: 'ok', service: 'user-service' };
  }

  @Get('internal/user/data')
  getUserServiceData() {
    console.log('LOG: Data request received for User Service');
    return { message: 'This is sensitive data from the User Service!' };
  }
}