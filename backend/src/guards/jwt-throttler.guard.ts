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

    // This is a new dependency for our custom guard, so we keep 'private readonly'.
    private readonly jwtService: JwtService,
  ) {
    // Pass the required arguments to the parent constructor.
    super(options, storageService, reflector);
  }

  protected async getTracker(req: Record<string, any>): Promise<string> {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const payload = this.jwtService.verify(token, { secret: 'YOUR_SECRET_KEY' });
        // Use the unique user ID from the token for rate limiting
        return payload.sub;
      } catch (err) {
        // If the token is invalid for any reason, fall back to the IP address
        return req.ip;
      }
    }

    // For any unauthenticated requests, track by IP address
    return req.ip;
  }
}