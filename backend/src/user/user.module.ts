import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ProxyModule } from '../proxy/proxy.module';

@Module({
  imports: [ProxyModule], // Import ProxyModule to make ProxyService available
  controllers: [UserController],
})
export class UserModule {}