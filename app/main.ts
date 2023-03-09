import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from '@atom/module';
import { ConfigService } from '@nestjs/config';
import { HttpFilter } from '@filter/http.filter';
import { HttpInterceptor } from '@interfaces/http.interfaces';
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalFilters(new HttpFilter())
  app.useGlobalInterceptors(new HttpInterceptor())

  const port = app.get(ConfigService).get<string>('ENV_PORT') || 3000;
  await app.listen(port, (): void => {
    console.log(`Nest is running at http://localhost:${port}`);
  });
}
bootstrap();
