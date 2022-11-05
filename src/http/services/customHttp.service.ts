import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class CustomHttpService {
    constructor(private readonly httpService: HttpService) {}
  
    private readonly logger = new Logger(CustomHttpService.name);

    async get(url) {
        try {
            const observable = await this.httpService.get(url).pipe(map((res) => res.data));
            return await lastValueFrom(observable);
        } catch(e) {
            console.log(e);
            this.logger.debug(e);
        }
    }
}