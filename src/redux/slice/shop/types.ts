import {GameType} from "../main/types";

export type ShopType = {
    games: GamesShop[];
    filters: FiltersType;
    loading: boolean;
    page: number;
    game: Game | null;
    allGames: GamesShop[];
}

export interface GamesShop extends GameType {
    "sale"?: number;
    "lastPrice"?: number;
    "favorite": boolean;
    genre: string[]
}

export interface Game extends GamesShop {
    "dateRealise": string;
    "developers": string;
    "description": string;
    "rating": string;
    "bannerImg": string;
    "screenShots": string[];
}


type FiltersType = {
    sortBy: string;
    price: string[];
    genre: string[];
    platform: string[];
}

export type FetchGamesType = {
    data: GamesShop[];
    isNew: boolean;
}


export type QueryType = {
    isNew: boolean;
}


