import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CronService } from './../../cron/services/cron.service';
import { GetDataService } from './../../cron/services/getData.service';
import { CustomHttpService } from './../../http/services/customHttp.service';
import { Developer } from './../../repository/entities/developer.entity';
import { Hackathon } from './../../repository/entities/hackathon.entity';
import { CronController } from './../../cron/controllers/cron.controller';
import { RepositoryService } from './../../repository/service/repository.service';
import { hackathonToTestInsert } from './../../repository/mock/mock';

describe('CronController', () => {
  let cronController: CronController;
  let getDataService: GetDataService;
  let repositoryService: RepositoryService;
  let hackathon: Hackathon;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
        imports: [
          TypeOrmModule.forRoot({
            type: 'mongodb',
            host: 'localhost',
            port: 27017,
            database: 'test',
            entities: [Developer, Hackathon],
            synchronize: true,
          }),
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
        ]
    },).compile();
    repositoryService = await app.resolve(RepositoryService);
    getDataService = await app.resolve(GetDataService);
    cronController = app.get<CronController>(CronController);

    hackathon = (await cronController.insertTest())[0];
    console.log(hackathon._id);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(hackathon._id).toBeDefined();
      expect(hackathon._id).not.toBe(null);
      expect(hackathon.id).toBeDefined();
      expect(hackathon.id.name).toBe(hackathonToTestInsert.id.name);
      expect(hackathon.id.value).toBe(hackathonToTestInsert.id.value);
      expect(hackathon.developers).toBeDefined();
      expect(hackathon.id.name).toBe(hackathonToTestInsert.id.name);
    });
  });
});
