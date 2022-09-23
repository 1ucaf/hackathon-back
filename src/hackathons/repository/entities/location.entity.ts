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