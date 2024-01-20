import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './users/users.module';
import { ActivitiesModule } from './activities/activities.module';

@Module({
  imports: [PetsModule, UsersModule, ActivitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
