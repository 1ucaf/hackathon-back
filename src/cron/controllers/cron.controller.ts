import { Controller, Get } from '@nestjs/common';
import { CronService } from '../services/cron.service';

@Controller()
export class CronController {
  constructor(private readonly cronService: CronService) {}
}
