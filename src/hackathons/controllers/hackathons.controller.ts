import { Controller, Get, Param, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from './../../auth/passport-guards/jwt-auth.guard';
import { HackathonsService } from './../services/hackathons.service';

@Controller("hackathons")
export class HackathonsController {
  constructor(private readonly hackathonsService: HackathonsService) {}

  @Get("hello")
  getRows(
    @Query('param') param: number,
  ){
    console.log(param === 3);
    console.log(typeof param);
    console.log(typeof param === 'number');
    return {
        value: param,
    };
  }


  @Get()
  @UseGuards(JwtAuthGuard)
  getHackathons() {
    return this.hackathonsService.getHackathons();
  }

  @UseGuards(JwtAuthGuard)
  @Get("/developers/:idName/:idValue")
  getDevelopers( @Param("idName") idName:string, @Param("idValue") idValue:string ) {
    return this.hackathonsService.getDevelopers({name: idName, value: idValue});
  }
  
}
