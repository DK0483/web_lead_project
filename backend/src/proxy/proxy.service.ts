import { HttpService } from '@nestjs/axios';
import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProxyService {
  constructor(private readonly httpService: HttpService) {}

  // This is the core graceful failover logic
  async proxyRequest(serviceUrl: string, healthUrl: string) {
    try {
      // 1. Check the health of the downstream service first
      await firstValueFrom(this.httpService.get(healthUrl));
    } catch (error) {
      // 2. If the health check fails, throw a 503 error immediately
      console.error(`Health check failed for ${serviceUrl}`, error.message);
      throw new ServiceUnavailableException(
        `${serviceUrl} is currently unavailable.`,
      );
    }

    // 3. If the health check passes, forward the request to the actual data endpoint
    try {
      const response = await firstValueFrom(this.httpService.get(serviceUrl));
      return response.data;
    } catch (error) {
      throw new ServiceUnavailableException('Error forwarding request.');
    }
  }
}