import { IInfo } from './common.interfaces';

type origin = {
    name: string;
    url: string;
};

type location = {
    name: string;
    url: string;
};

export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: origin;
    location: location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface IGetCharactersResponse {
    info: IInfo;
    results: ICharacter[];
}

export type IGetCharacterResponse = ICharacter[];

export interface IGetCharacters {
    page?: string;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
}
