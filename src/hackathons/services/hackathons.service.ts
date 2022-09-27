import { Injectable } from '@nestjs/common';
import { Developer } from '../../repository/entities/hackathon.entity';
import { Id } from '../../repository/entities/user.entity';
import { hackathons } from '../../repository/mock/mock';

@Injectable()
export class HackathonsService {
  getHelloHackathons(): string {
    return 'Hello Hackathons!';
  }
  getHackathons(){
    return hackathons.map(h=> {
      return {
        id: h.id,
        place: h.place,
        date: h.date,
        name: h.name,
      }
    });
  }
  getDevelopers(hackathonId:Id): Developer[] {
    console.log(hackathonId);
    return hackathons.find(h=>h.id.name == hackathonId.name && h.id.value == hackathonId.value).developers;
  }
  
  getTopDevelopers(): Developer[] {
    return hackathons.map(h => h.developers.find(d=>d.rank === 1));
  }

  getAllDevelopers(): Developer[] {
    return hackathons.reduce((previousValue, currentValue) => [...previousValue, ...currentValue.developers], [])
  }
}
