import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { HackathonsService } from "../services/hackathons.service";

@Controller("developers")
export class DevelopersController {
  constructor(private readonly hackathonsService: HackathonsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getAllDevelopers() {
    return this.hackathonsService.getAllDevelopers();
  }

  @UseGuards(JwtAuthGuard)
  @Get("/top")
  getTopDevelopers() {
    return this.hackathonsService.getTopDevelopers();
  }
}