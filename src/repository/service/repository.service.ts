import { Injectable } from '@nestjs/common';
import { Developer } from '../../repository/entities/developer.entity';
import { DevInHackathon, Hackathon } from '../../repository/entities/hackathon.entity';
import { Id } from '../../repository/entities/developer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class RepositoryService {
    constructor(
        @InjectRepository(Developer)
        private readonly developerRepository:MongoRepository<Developer>,
        @InjectRepository(Hackathon)
        private readonly hackathonRepository:MongoRepository<Hackathon>,
    ) {}

    async insertDeveloper(developerToInsert:Developer):Promise<Developer> {
        const developer = await this.developerRepository.insert(developerToInsert);
        // console.log(developer.raw.ops);
        return developer.raw.ops;
    }
    async insertManyDevelopers(developerToInsert:Developer[]):Promise<Developer[]> {
        const developer = await this.developerRepository.insert(developerToInsert);
        // console.log(developer.raw.ops);
        return developer.raw.ops;
    }
    async insertHackathon(hackathonToInsert:Hackathon) {
        const hackathon = await this.hackathonRepository.insert(hackathonToInsert);
        // console.log(hackathon.raw.ops);
        return hackathon.raw.ops;
    }

    async getHackathons():Promise<Hackathon[]> {
        const hackathon = await this.hackathonRepository.find();
        return hackathon;
    }
    async getHackathon(hackathonId:Id):Promise<Hackathon> {
        const hackathon = await this.hackathonRepository.findOneBy({
            "id.name": hackathonId.name,
            "id.value": hackathonId.value,
        });
        return hackathon;
    }
    async getDevsInHackathon(hackathonId:Id):Promise<DevInHackathon[]> {
        const hackathon = await this.getHackathon(hackathonId);
        return hackathon.developers;
    }
    async getAllDevelopers():Promise<Developer[]> {
        const developers:Developer[] = await this.developerRepository.find();
        return developers;
    }
}
