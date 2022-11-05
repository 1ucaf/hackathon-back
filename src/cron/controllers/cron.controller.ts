import { Controller, Get, Post } from '@nestjs/common';
import { RepositoryService } from './../../repository/service/repository.service';
import { developerToTestInsert, hackathonToTestInsert } from 'src/repository/mock/mock';
import { GetDataService } from '../services/getData.service';

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
  
  @Get("/devs")
  getDevs(){
    return this.getDataService.getAndInsert10Developers();
  }
}
