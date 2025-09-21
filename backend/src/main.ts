import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add this line to enable CORS
  app.enableCors();

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();