import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Hackathon, Developer } from 'src/hackathons/repository/entities/hackathon.entity';
import { Result } from 'src/hackathons/repository/entities/user.entity';
import { hackathons } from 'src/hackathons/repository/mock/mock';
import { CustomHttpService } from './customHttp.service';

@Injectable()
export class CronService {
    constructor(private readonly httpService: CustomHttpService) {}
  
    private readonly logger = new Logger(CronService.name);

    @Cron('0 */5 * * * *')
    async handleCron() {
        this.getAndInsertHackathon();
    }

    async getAndInsertHackathon(){
        this.getHackathon().then(hackathon => {
            hackathons.push(hackathon);
            console.log(hackathons);
        }).catch(e=>{
            console.log(e);
            this.logger.debug(e);
        })
    }
    async getHackathon():Promise<Hackathon> {
        const hackathon:Hackathon = new Hackathon();
        
        await Promise.all([
            this.httpService.get('https://randomuser.me/api/?inc=location,dob,name,id')
            .then(response => {
                const data:Result = response.results[0];
                hackathon.id = data.id;
                hackathon.name = data.name.last + "'s hackathon";
                hackathon.date = data.dob.date;
                hackathon.place = data.location;
            }),
            this.get10Developers().then(developers => {
                hackathon.developers = developers;
            })
        ]);

        return hackathon;
    }

    async get10Developers():Promise<Developer[]> {
        let count = 1;
        const data = await this.httpService.get('https://randomuser.me/api/?exc=picture,login&results=10');
        const developers:Developer[] = data.results.map(randomUser=>{
            return {
                rank: count++,
                ...randomUser
            }
        })
        return developers;
    }
}