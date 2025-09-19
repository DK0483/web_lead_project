import { HttpService } from '@nestjs/axios';
import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProxyService {
  constructor(private readonly httpService: HttpService) {}

  async proxyRequest(serviceUrl: string, healthUrl: string) {
    try {
      await firstValueFrom(this.httpService.get(healthUrl));
    } catch (error) {
      console.error(`Health check failed for ${serviceUrl}`, error.message);
      throw new ServiceUnavailableException(
        `${serviceUrl} is currently unavailable.`,
      );
    }
    try {
      const response = await firstValueFrom(this.httpService.get(serviceUrl));
      return response.data;
    } catch (error) {
      throw new ServiceUnavailableException('Error forwarding request.');
    }
  }
}