import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  create(activityData: Activity): Promise<Activity> {
    const activity = this.activityRepository.create(activityData);
    return this.activityRepository.save(activity);
  }

  findAll(): Promise<Activity[]> {
    return this.activityRepository.find();
  }
}
