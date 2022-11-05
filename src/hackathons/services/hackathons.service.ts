import { Injectable } from '@nestjs/common';
import { Developer } from '../../repository/entities/developer.entity';
import { DevInHackathon, Hackathon } from '../../repository/entities/hackathon.entity';
import { Id } from '../../repository/entities/developer.entity';
import { RepositoryService } from 'src/repository/service/repository.service';

export interface DeveloperBasicInfo {
  name: string,
  age: string,
  gender: string,
}

@Injectable()
export class HackathonsService {
  constructor(
      private readonly repositoryService: RepositoryService,
    ) {}
  
  getHelloHackathons(): string {
    return 'Hello Hackathons!';
  }
  async getHackathons(){
    return await this.repositoryService.getHackathons()
    .then(data=>{
      return data.map(h=> {
        return {
          id: h.id,
          place: h.place,
          date: h.date,
          name: h.name,
        }
      });
    })
  }
  async getDevelopers(hackathonId:Id): Promise<DevInHackathon[]> {
    return await this.repositoryService.getDevsInHackathon(hackathonId)
      .then(devs=> devs.map(dev=>{return {...dev, age: this.getAge(dev.dob)}}));
  }
  
  async getTopDevelopers(): Promise<DeveloperBasicInfo[]> {
    return await this.repositoryService.getHackathons()
    .then(hackathons=> {
      return hackathons.map(hackathon => hackathon.developers.find(d=>d.rank === 1))
      .map(dev => {
        return {
          ...dev,
          age: this.getAge(dev.dob) + " Y.O.",
        }
    })})
  }

  getAge(stringBirthDate:string){
    var today = new Date();
    var birthDate = new Date(stringBirthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  async getAllDevelopers(): Promise<Developer[]> {
    return await this.repositoryService.getAllDevelopers();
  }
}
