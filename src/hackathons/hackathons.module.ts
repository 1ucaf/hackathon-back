import { Module } from '@nestjs/common';
import { DevelopersController } from './controllers/developers.controller';
import { HackathonsController } from './controllers/hackathons.controller';
import { HackathonsService } from './services/hackathons.service';

@Module({
  imports: [],
  controllers: [HackathonsController, DevelopersController],
  providers: [HackathonsService],
})
export class HackathonsModule {}
