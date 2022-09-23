import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { CronService } from './services/cron.service';
import { CustomHttpService } from './services/customHttp.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 50000,
      maxRedirects: 5,
    }),
    ScheduleModule.forRoot()
  ],
  controllers: [],
  providers: [
    CronService,
    CustomHttpService
  ],
})
export class CronModule {}
