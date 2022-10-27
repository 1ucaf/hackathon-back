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
export class Street {
    number: number;
    name: string;
}

export class Coordinates {
    latitude: string;
    longitude: string;
}

export class Timezone {
    offset: string;
    description: string;
}

export class Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string|number;
    coordinates: Coordinates;
    timezone: Timezone;
}

export class Result {
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

export class User {
    results: Result[];
    info: Info;
}