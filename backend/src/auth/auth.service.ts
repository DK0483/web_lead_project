import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // In a real app, you would validate the user against a database
  async validateUser(username: string, pass: string): Promise<any> {
    if (username === 'testuser' && pass === 'password') {
      return { userId: 1, username: 'testuser' };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}