import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'YOUR_SECRET_KEY', // This MUST match the secret in your auth.module.ts
    });
  }

  async validate(payload: any) {
    // The JWT is valid, so we can trust the payload.
    // The return value is attached to the request object as req.user.
    return { userId: payload.sub, username: payload.username };
  }
}