import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";
import { Location } from "./location.entity";

export class Name {
    @Column()
    title: string;
    @Column()
    first: string;
    @Column()
    last: string;
}


export class Login {
    @Column()
    uuid: string;
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    salt: string;
    @Column()
    md5: string;
    @Column()
    sha1: string;
    @Column()
    sha256: string;
}

export class Dob {
    @Column()
    date: Date|string;
    @Column()
    age: number;
}

export class Registered {
    @Column()
    date: Date|string;
    @Column()
    age: number;
}

export class Id {
    @Column()
    name: string;
    @Column()
    value: string;
}

export class Picture {
    @Column()
    large: string;
    @Column()
    medium: string;
    @Column()
    thumbnail: string;
}

@Entity()
export class Developer {
    @ObjectIdColumn()
    _id: ObjectID
    @Column()
    id:Id;
    @Column()
    gender: string;
    @Column()
    name: Name;
    @Column()
    location: Location;
    @Column()
    email: string;
    @Column()
    dob: Dob;
    @Column()
    registered: Registered;
    @Column()
    phone: string;
    @Column()
    cell: string;
    @Column()
    nat: string;
}
