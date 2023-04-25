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

export interface IGetEpisodes {
    info: IInfo;
    results: IEpisodeResult;
}

export type IGetEpisode = IEpisodeResult;
