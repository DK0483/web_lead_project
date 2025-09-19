import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProxyService } from '../proxy/proxy.service';

@Controller('gateway/user') // This is the public-facing path for the User service
export class UserController {
  // URLs for the internal mock service
  private readonly userServiceUrl = 'http://localhost:3001/internal/user/data';
  private readonly userServiceHealthUrl =
    'http://localhost:3001/internal/user/health';

  constructor(private readonly proxyService: ProxyService) {}

  @Get('data')
  @UseGuards(AuthGuard('jwt')) // This route is protected and requires a valid token
  async getUserData() {
    // The proxy service handles the health check and failover before forwarding
    return this.proxyService.proxyRequest(
      this.userServiceUrl,
      this.userServiceHealthUrl,
    );
  }
}
