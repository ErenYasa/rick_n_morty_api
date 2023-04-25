import { IInfo } from './common.interfaces';

export interface ILocationResult {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

export interface IGetLocations {
    info: IInfo;
    results: ILocationResult[];
}

export type IGetLocation = ILocationResult;
