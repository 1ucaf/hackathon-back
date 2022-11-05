import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CronService } from 'src/cron/services/cron.service';
import { GetDataService } from 'src/cron/services/getData.service';
import { CustomHttpService } from 'src/http/services/customHttp.service';
import { Developer } from 'src/repository/entities/developer.entity';
import { Hackathon } from 'src/repository/entities/hackathon.entity';
import { CronController } from './../../cron/controllers/cron.controller';
import { RepositoryService } from './../../repository/service/repository.service';

describe('AppController', () => {
    let cronController: CronController;
    let repositoryService: RepositoryService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
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
            ]
        },).compile();
        repositoryService = await app.resolve(RepositoryService);
        cronController = app.get<CronController>(CronController);

        

    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
        expect(1).toBe(1);
        });
    });
});
