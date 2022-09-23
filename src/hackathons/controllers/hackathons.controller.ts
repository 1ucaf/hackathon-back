import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Id } from '../repository/entities/user.entity';
import { HackathonsService } from './../services/hackathons.service';

@Controller("hackathons")
export class HackathonsController {
  constructor(private readonly hackathonsService: HackathonsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getHackathons() {
    return this.hackathonsService.getHackathons();
  }

  @UseGuards(JwtAuthGuard)
  @Get("/developers")
  getDevelopers(@Param("idName")idName:string, @Param("idValue")idValue:string) {
    return this.hackathonsService.getDevelopers({name: idName, value: idValue});
  }
}
