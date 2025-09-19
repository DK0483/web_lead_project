import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProxyService } from '../proxy/proxy.service';

@Controller('gateway/user') // This is the public-facing path for the User service
export class UserController {
  private readonly userServiceUrl = 'http://localhost:3001/internal/user/data';
  private readonly userServiceHealthUrl =
    'http://localhost:3001/internal/user/health';

  constructor(private readonly proxyService: ProxyService) {}

  @Get('data')
  @UseGuards(AuthGuard('jwt'))
  async getUserData() {
    return this.proxyService.proxyRequest(
      this.userServiceUrl,
      this.userServiceHealthUrl,
    );
  }
}
