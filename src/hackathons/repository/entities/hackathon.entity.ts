import { Location } from "./location.entity";
import { Id } from "./user.entity";
import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Developer } from "./developer.entity";

@Entity()
export class Hackathon {
    @ObjectIdColumn()
    _id: ObjectID
    @Column()
    id:Id;
    @Column()
    name: string;
    @Column(_type => Location)
    place: Location;
    @Column()
    date: string;
    @Column(_type => Developer)
    developers: Developer[];
}

