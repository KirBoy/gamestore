export type MainState = {
    games: GameType[];
    loading: boolean;
    slider: GameSlide[]
}

export interface GameType {
    "id": number,
    "title": string,
    "platforms": string[],
    "price": string,
    "urlImg": string,
}


export interface GameSlide extends GameType {
    "isAvailable": boolean,
    "slide": number
}
