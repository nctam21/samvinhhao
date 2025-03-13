import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './module/users/users.module';
import { AboutService } from './module/about/about.service';
import { AboutController } from './module/about/about.controller';
import { AboutModule } from './module/about/about.module';
import { About, AboutSchema } from './module/about/schema/about.schema';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs_db'),
    UsersModule,
    AboutModule,
    MongooseModule.forFeature([{ name: About.name, schema: AboutSchema }])
  ],
  controllers: [AppController, AboutController],
  providers: [AppService, AboutService],
})
export class AppModule {}
