import { Module } from '@nestjs/common';
import { ProxyService } from './proxy.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ProxyService],
  exports: [ProxyService], // Export the service so other modules can use it
})
export class ProxyModule {}