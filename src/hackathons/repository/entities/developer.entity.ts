import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Location } from "./location.entity";
import { Dob, Id, Login, Name, Picture, Registered } from "./user.entity";

@Entity()
export class Developer {
    @ObjectIdColumn()
    _id: ObjectID
    @Column()
    rank: number;
    @Column()
    gender: string;
    @Column()
    name: Name;
    @Column()
    location: Location;
    @Column()
    email: string;
    @Column()
    login: Login;
    @Column()
    dob: Dob;
    @Column()
    registered: Registered;
    @Column()
    phone: string;
    @Column()
    cell: string;
    @Column()
    id: Id;
    @Column()
    picture: Picture;
    @Column()
    nat: string;
}