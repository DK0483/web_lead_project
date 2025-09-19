import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // --- MOCK USER MICROSERVICE (INTERNAL ROUTES) ---
  // This simulates the health endpoint of a separate User Service.
  @Get('internal/user/health')
  checkUserServiceHealth() {
    console.log('LOG: Health check received for User Service');
    return { status: 'ok', service: 'user-service' };
  }

  // This simulates a real data endpoint on the User Service.
  @Get('internal/user/data')
  getUserServiceData() {
    console.log('LOG: Data request received for User Service');
    return { message: 'This is sensitive data from the User Service!' };
  }
}