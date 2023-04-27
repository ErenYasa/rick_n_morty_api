import { IInfo } from './common.interfaces';

export interface IEpisodeResult {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export interface IGetEpisodesResponse {
    info: IInfo;
    results: IEpisodeResult;
}

export type IGetEpisodeResponse = IEpisodeResult;

export interface IGetEpisodes {
    page?: string;
    name?: string;
    episode?: string;
}
