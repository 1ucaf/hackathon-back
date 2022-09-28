import { Location } from "./location.entity";
import { Id, Developer } from "./user.entity";


export class Hackathon {
    id:Id;
    name: string;
    place: Location;
    date: Date|string
    developers: Developer[];
}
