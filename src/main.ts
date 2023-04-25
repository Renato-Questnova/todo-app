import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // http://localhost:9090/api
  const config = new DocumentBuilder()
    .setTitle('Booking System API')
    .setDescription('Capstone Project')
    .addTag('ABSR')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 9090;
  console.log(port);
  await app.listen(port);
}
bootstrap();
