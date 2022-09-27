import { Location } from "./location.entity";
import { Id, Result } from "./user.entity";


export class Hackathon {
    id:Id;
    name: string;
    place: Location;
    date: Date|string
    developers: Developer[];
}

export class Developer extends Result {
    rank: number;
}
