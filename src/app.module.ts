import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { UserModule } from './user/user.module';
import { LoggerMiddleware } from './app.logger.middleware';
import { UserController } from './user/user.controller';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CatModule, UserModule],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude('/user/:id')
      .forRoutes(UserController);
  }

}
