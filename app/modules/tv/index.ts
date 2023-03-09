import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TVController } from './controller';
import { TVService } from './service';
import { ConfigModule } from '@nestjs/config';
import { ParamsMiddleware } from '@middleware'

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TVController],
  providers: [TVService],
})
export class TVModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(ParamsMiddleware)
      .forRoutes('*');
  }
}
