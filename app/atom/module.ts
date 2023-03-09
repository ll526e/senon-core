import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from '@middleware';
import { MovieModule, TVModule, PeopleModule } from '@modules'
import { AppController } from './controller';
import { AppService } from './service';

@Module({
  imports: [ConfigModule, MovieModule, TVModule, PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
