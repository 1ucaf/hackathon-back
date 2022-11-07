import { Controller, Get, Post } from '@nestjs/common';
import { RepositoryService } from './../../repository/service/repository.service';
import { developersToTestInsert, developerToTestInsert, hackathonToTestInsert } from './../../repository/mock/mock';
import { GetDataService } from '../services/getData.service';
import { Developer } from './../../repository/entities/developer.entity';
import { DevInHackathon } from './../../repository/entities/hackathon.entity';

@Controller('cron')
export class CronController {
  constructor(
    private readonly getDataService: GetDataService,
    private readonly repositoryService: RepositoryService
  ) {}

  @Post("/testall")
  insertAll(){
    return this.getDataService.getAndInsertHackathon();
  }

  @Post("/test")
  async insertTest(){
    const developers:Developer[] = await this.getDataService.insertDevelopersIntoDB(developersToTestInsert);
    const devList:DevInHackathon[] = this.getDataService.createDevListItems(developers);
    hackathonToTestInsert.developers = devList;
    return await this.repositoryService.insertHackathon(hackathonToTestInsert);
  }

  @Post("/insert")
  insert(){
    return this.repositoryService.insertDeveloper(developerToTestInsert)
  }

  @Post("/insert/many")
  insertMany(){
    return this.repositoryService.insertManyDevelopers([developerToTestInsert,{...developerToTestInsert}])
  }

  @Post("/inserth")
  insertHackathon(){
    return this.repositoryService.insertHackathon(hackathonToTestInsert);
  }
}
