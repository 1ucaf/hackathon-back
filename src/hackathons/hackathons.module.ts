import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Developer } from 'src/repository/entities/developer.entity';
import { Hackathon } from 'src/repository/entities/hackathon.entity';
import { RepositoryService } from 'src/repository/service/repository.service';
import { DevelopersController } from './controllers/developers.controller';
import { HackathonsController } from './controllers/hackathons.controller';
import { HackathonsService } from './services/hackathons.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Developer, Hackathon]),
  ],
  controllers: [
    HackathonsController,
    DevelopersController
  ],
  providers: [
    HackathonsService,
    RepositoryService,
  ],
})

export class HackathonsModule {}
