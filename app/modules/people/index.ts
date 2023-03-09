import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PeopleController } from './controller';
import { PeopleService } from './service';
import { ConfigModule } from '@nestjs/config';
import { ParamsMiddleware } from '@middleware'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(ParamsMiddleware)
      .forRoutes('*');
  }
}
