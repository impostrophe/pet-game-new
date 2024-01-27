import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './users/users.module';
import { ActivitiesModule } from './activities/activities.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '193.186.4.206',
      port: 5432,
      username: 'postgres',
      password: 'fK{?;|i%&fUt0biD',
      database: 'ogs-pet-game',
      entities: [PetsModule, UsersModule, ActivitiesModule],
      synchronize: true, // set to false in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
