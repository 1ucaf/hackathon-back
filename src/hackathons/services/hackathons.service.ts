import { Injectable } from '@nestjs/common';
import { AppDataSource } from '../../repository/dataSource';
import { Developer } from '../../repository/entities/developer.entity';
import { Hackathon } from '../../repository/entities/hackathon.entity';
import { Id } from '../../repository/entities/user.entity';

export interface DeveloperBasicInfo {
  name: string,
  age: string,
  gender: string,
}

@Injectable()
export class HackathonsService {
  getHelloHackathons(): string {
    return 'Hello Hackathons!';
  }
  async getHackathons(){
    return await AppDataSource.getMongoRepository(Hackathon).find()
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
  async getDevelopers(hackathonId:Id): Promise<Developer[]> {
    console.log(hackathonId);
    return await AppDataSource.getMongoRepository(Hackathon).findOneBy({
      "id.name": hackathonId.name,
      "id.value": hackathonId.value,
    })
    .then(hackathon => hackathon.developers);
  }
  
  async getTopDevelopers(): Promise<DeveloperBasicInfo[]> {
    return await AppDataSource.getMongoRepository(Hackathon)
    .find()
    .then(h=> {
      return h.map(h => h.developers.find(d=>d.rank === 1))
      .map(d => {
        return {
            name: `${d.name.title} ${d.name.first} ${d.name.last}`,
            age: d.dob.age + " Y.O.",
            gender: d.gender
        }
    })})
    
  }

  async getAllDevelopers(): Promise<Developer[]> {
    return await AppDataSource.getMongoRepository(Hackathon).find()
    .then(hackathon => {
      return hackathon.reduce((previousValue, currentValue) => [...previousValue, ...currentValue.developers], [])
    })
  }
}
