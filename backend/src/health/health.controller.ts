import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { SkipThrottle } from 'nestjs-throttler';

@SkipThrottle()
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('user-service', 'http://localhost:3001/user/health'),
    ]);
  }
}