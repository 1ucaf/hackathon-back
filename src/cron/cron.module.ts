import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { CronService } from './services/cron.service';
import { CustomHttpService } from '../http/services/customHttp.service';
import { CronController } from './controllers/cron.controller';
import { RepositoryService } from 'src/repository/service/repository.service';
import { GetDataService } from './services/getData.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Developer } from './../repository/entities/developer.entity';
import { Hackathon } from './../repository/entities/hackathon.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Developer, Hackathon]),
    HttpModule.register({
      timeout: 50000,
      maxRedirects: 5,
    }),
    ScheduleModule.forRoot()
  ],
  controllers: [CronController],
  providers: [
    CronService,
    CustomHttpService,
    RepositoryService,
    GetDataService,
  ],
})
export class CronModule {}
