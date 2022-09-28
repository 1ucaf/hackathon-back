import { Location } from "./location.entity";

export class Name {
    title: string;
    first: string;
    last: string;
}


export class Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export class Dob {
    date: Date|string;
    age: number;
}

export class Registered {
    date: Date|string;
    age: number;
}

export class Id {
    name: string;
    value: string;
}

export class Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export class Developer {
    rank: number;
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}

export class Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}