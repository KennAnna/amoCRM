import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {envFile} from "./config";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix(envFile.appPrefix);
    app.useGlobalPipes(new ValidationPipe({
        transform: true
    }));
    await app.listen(envFile.appPort);
}

bootstrap();
