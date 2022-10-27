import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Hackathon } from './../../repository/entities/hackathon.entity';
import { Result, User } from './../dtos/user.dto';
import { CustomHttpService } from './customHttp.service';
import { Developer } from 'src/repository/entities/developer.entity';

@Injectable()
export class CronService {
    constructor(private readonly httpService: CustomHttpService) {}

    private readonly logger = new Logger(CronService.name);

    @Cron('0 */5 * * * *')
    async handleCron() {
        this.getAndInsertHackathon();
    }

    async getAndInsertHackathon(){
        this.getHackathon().then(async hackathon => {
            await AppDataSource.getMongoRepository(Hackathon).insertOne(hackathon)
            // hackathons.push(hackathon);
            // console.log(hackathons);
        }).catch(e=>{
            console.log(e);
            this.logger.debug(e);
        })
    }
    async getHackathon():Promise<Hackathon> {
        const hackathon:Hackathon = new Hackathon();
        
        await Promise.all([
            this.httpService.get('https://randomuser.me/api/?inc=location,dob,name,id')
            .then((response:User) => {
                const data:Result = response.results[0];
                hackathon.id = data.id;
                hackathon.name = data.name.last + "'s hackathon";
                hackathon.date = data.dob.date.toLocaleString(); //REVISAR SI ANDA BIEN
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
        const data:User = await this.httpService.get('https://randomuser.me/api/?exc=picture,login&results=10');
        const developers:Developer[] = data.results.map(randomUser=>{
            return {
                rank: count++,
                ...randomUser
            }
        })
        return developers;
    }
}