import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'YOUR_SECRET_KEY', // IMPORTANT: In a real app, use an environment variable for this
      signOptions: { expiresIn: '60m' }, // Token will be valid for 60 minutes
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController], // This line registers your new controller
  exports: [AuthService],
})
export class AuthModule {}