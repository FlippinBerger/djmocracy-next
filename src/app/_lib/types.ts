
export type Song = {
    title: string,
    artist: string,
    votes: number,
}

export enum Vote {
    Up,
    Down,
    None,
}

export type Event = {
    id: string,
    host: string,
    name: string,
    playlist: Song[],

    // TODO update this to be a Geolocation
    location: string,
}

export type Entity = {
    id: string,
    name: string
}