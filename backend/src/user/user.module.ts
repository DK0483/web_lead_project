import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ProxyModule } from '../proxy/proxy.module';
import { UserService } from './user.service';

@Module({
  imports: [ProxyModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Export the service so other modules (like AuthModule) can use it
})
export class UserModule {}