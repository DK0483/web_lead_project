import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Handles user login.
   * This endpoint is protected by the 'local' strategy, which validates username and password.
   * If validation is successful, it returns a JWT access token.
   * @route POST /auth/login
   */
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  /**
   * Handles new user registration.
   * This is a public endpoint that takes user details, hashes the password,
   * and creates a new user in the system.
   * @route POST /auth/register
   */
  @Post('register')
  async register(@Body() body) {
    // In a production application, you would use a Data Transfer Object (DTO)
    // with class-validator to ensure the body has the correct shape.
    return this.authService.register(body);
  }

  /**
   * Fetches the profile of the currently authenticated user.
   * This endpoint is protected by the 'jwt' strategy, which validates the Bearer Token.
   * If the token is valid, it returns the user's data from the JWT payload.
   * @route GET /auth/profile
   */
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

