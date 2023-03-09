import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MovieController } from './controller';
import { MovieService } from './service';
import { ConfigModule } from '@nestjs/config';
import { ParamsMiddleware } from '@middleware'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(ParamsMiddleware)
      .forRoutes('*');
  }
}
