import { Column } from "typeorm";
import { Location } from "./location.entity";
import { Dob, Id, Login, Name, Picture, Registered } from "./user.entity";

export class Developer {
    rank: number;
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
