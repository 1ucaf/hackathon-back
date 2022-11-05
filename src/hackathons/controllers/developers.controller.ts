import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "./../../auth/passport-guards/jwt-auth.guard";
import { HackathonsService } from "../services/hackathons.service";

@Controller("developers")
export class DevelopersController {
  constructor(private readonly hackathonsService: HackathonsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getAllDevelopers() {
    return this.hackathonsService.getAllDevelopers();
  }

  @Get("/age")
  getAgeTest() {
    return this.hackathonsService.getAge("1990-01-11T18:24:59.672Z");
  }

  @UseGuards(JwtAuthGuard)
  @Get("/top")
  getTopDevelopers() {
    return this.hackathonsService.getTopDevelopers();
  }
}