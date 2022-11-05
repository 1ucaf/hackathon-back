import { Column } from "typeorm";


export class Street {
    @Column()
    number: number;
    @Column()
    name: string;
}

export class Coordinates {
    @Column()
    latitude: string;
    @Column()
    longitude: string;
}

export class Timezone {
    @Column()
    offset: string;
    @Column()
    description: string;
}

export class Location {
    @Column()
    street: Street;
    @Column()
    city: string;
    @Column()
    state: string;
    @Column()
    country: string;
    @Column()
    postcode: string|number;
    @Column()
    coordinates: Coordinates;
    @Column()
    timezone: Timezone;
}