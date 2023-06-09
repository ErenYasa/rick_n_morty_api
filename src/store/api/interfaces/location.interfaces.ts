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

export interface IGetLocationsResponse {
    json(): any;
    info: IInfo;
    results: ILocationResult[];
}

export type IGetLocationResponse = ILocationResult;

export interface IGetLocations {
    page?: string;
    name?: string;
    type?: string;
    dimension?: string;
}
