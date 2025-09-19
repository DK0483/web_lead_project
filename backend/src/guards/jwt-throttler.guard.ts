import { ThrottlerGuard } from 'nestjs-throttler';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtThrottlerGuard extends ThrottlerGuard {
  constructor(
    options,
    storageService,
    reflector: Reflector,

    private readonly jwtService: JwtService,
  ) {
    super(options, storageService, reflector);
  }

  protected async getTracker(req: Record<string, any>): Promise<string> {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const payload = this.jwtService.verify(token, { secret: 'YOUR_SECRET_KEY' });
        return payload.sub;
      } catch (err) {
        return req.ip;
      }
    }
    return req.ip;
  }
}