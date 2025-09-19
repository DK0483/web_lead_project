import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from 'nestjs-throttler';
import { APP_GUARD } from '@nestjs/core';
import { JwtThrottlerGuard } from './guards/jwt-throttler.guard';
import { JwtModule } from '@nestjs/jwt';
import { HealthModule } from './health/health.module';
import { UserModule } from './user/user.module';
import { ProxyModule } from './proxy/proxy.module';

@Module({
  imports: [
    AuthModule,
    ThrottlerModule.forRoot({
      ttl: 60000,
      limit: 10,
    }),
    JwtModule.register({
      secret: 'YOUR_SECRET_KEY',
    }),
    HealthModule,
    UserModule,
    ProxyModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtThrottlerGuard,
    },
  ],
})
export class AppModule {}