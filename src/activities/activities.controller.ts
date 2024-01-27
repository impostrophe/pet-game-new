import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { Activity } from './entities/activity.entity';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@Body() activityData: Activity): Promise<Activity> {
    return this.activitiesService.create(activityData);
  }

  @Get()
  findAll(): Promise<Activity[]> {
    return this.activitiesService.findAll();
  }
}
