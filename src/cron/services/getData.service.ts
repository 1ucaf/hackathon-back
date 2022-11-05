import { Injectable, Logger } from '@nestjs/common';
import { DevInHackathon, Hackathon } from './../../repository/entities/hackathon.entity';
import { Result, User } from './../dtos/user.dto';
import { CustomHttpService } from '../../http/services/customHttp.service';
import { Developer } from 'src/repository/entities/developer.entity';
import { ObjectID } from 'typeorm';
import { RepositoryService } from 'src/repository/service/repository.service';

const apiUrl = 'https://randomuser.me/api/'

@Injectable()
export class GetDataService {
    constructor(
        private readonly httpService: CustomHttpService,
        private readonly repositoryService: RepositoryService,
    ) {}

    private readonly logger = new Logger(GetDataService.name);

    async getAndInsertHackathon(){
        try {
            const hackathon:Hackathon = await this.getHackathon();
            const developersWithoutId:Developer[] = await this.generate10Developers();
            const developers:Developer[] = await this.insertDevelopersIntoDB(developersWithoutId);
            const devList:DevInHackathon[] = this.createDevListItems(developers);
            hackathon.developers = devList;
            await this.repositoryService.insertHackathon(hackathon);
        }
        catch(e) {
            this.logger.error(e);
            this.logger.debug(e);
        }
    }

    async getHackathon():Promise<Hackathon> {
        const hackathon:Hackathon = new Hackathon();
        
        await this.getCleanDataForHackathon()
            .then((response:User) => {
                const data:Result = response.results[0];
                hackathon.id = data.id;
                hackathon.name = data.name.last + "'s hackathon";
                hackathon.date = data.dob.date.toLocaleString();
                hackathon.place = data.location;
            })
        return hackathon;
    };

    async getCleanDataForHackathon():Promise<User> {
        let data:User = null;
        while(data === null) {
            data = await this.httpService.get(apiUrl + '?inc=location,dob,name,id')
            if(data.results[0].id.value===null) {
                data = null;
            }
        }
        return data;
    }

    createDevListItems(developers:Developer[]):DevInHackathon[] {
        let rankCount = 1;
        const devsInHack:DevInHackathon[] = developers.map(dev => {
            return {
                rank: rankCount++,
                developer: dev._id,
                name: `${dev.name.title} ${dev.name.first} ${dev.name.last}`,
                dob: dev.dob.date.toLocaleString(),
                gender: dev.gender,
            }
        });
        return devsInHack;
    }

    async insertDevelopersIntoDB(developers: Developer[]):Promise<Developer[]> {
        return await this.repositoryService.insertManyDevelopers(developers);
    }

    async getDataFor10Devs():Promise<User> {
        return await this.httpService.get(apiUrl + '?exc=picture,login&results=10')
    }

    async generate10Developers():Promise<Developer[]> {
        const developers:Developer[] = [];
        //filtrado de datos corruptos
        let cleanResultsCount = 0;
        while(cleanResultsCount < 10) {
            const data:User = await this.getDataFor10Devs();
            const cleanData:Result[] = data.results.filter(result => {
                //si el id está corrupto o si ya tengo la cantidad de devs que se necesitan, descarto el elemento
                if(result.id.value === null || cleanResultsCount === 10) {
                    return false;
                } else {
                    cleanResultsCount++;
                    return true;
                }
            })
            developers.push(...cleanData.map(dev => {
                return {
                    ...dev,
                    _id:null,
                }
            }));
        }
        return developers;
    }
}