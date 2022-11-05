import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { GetDataService } from './getData.service';

@Injectable()
export class CronService {
    constructor(private readonly service: GetDataService) {}

    private readonly logger = new Logger(CronService.name);

    @Cron('*/5 * * * * *')
    async handleCron() {
        this.service.getAndInsertHackathon();
        this.logger.verbose("New Hackathon inserted!");
    }
}