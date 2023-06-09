import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetCharacterResponse, IGetCharacters, IGetCharactersResponse } from './interfaces/character.interfaces';
import { IGetLocationResponse, IGetLocations, IGetLocationsResponse } from './interfaces/location.interfaces';
import { IGetEpisodeResponse, IGetEpisodes, IGetEpisodesResponse } from './interfaces/episode.interfaces';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api',
    }),
    endpoints: (builder) => ({
        getCharacters: builder.query<IGetCharactersResponse, IGetCharacters>({
            query: ({ page, name, status, species, type, gender }) => ({
                url: `/character/?page=${page}&name=${name}&status=${status}&species=${species}&type=${type}&=${gender}`,
            }),
        }),
        getCharacter: builder.query<IGetCharacterResponse, string | string[]>({
            query: (id) => ({
                url: `/character/${id}`,
                responseHandler: async (response: Response) => {
                    const json = await response.json();
                    return json.length > 1 ? json : [json];
                },
            }),
        }),
        getLocations: builder.query<IGetLocationsResponse, IGetLocations>({
            query: ({ page, name, type, dimension }) => {
                let url = `/location/?page=${page}`;
                if (name) url += `&name=${name}`;
                if (type) url += `&type=${type}`;
                if (dimension) url += `&dimension=${dimension}`;

                return {
                    url,
                    responseHandler: async (response: Response) => {
                        const json = await response.json();
                        return json;
                    },
                };
            },
        }),
        getLocation: builder.query<IGetLocationResponse, number>({
            query: (id) => ({
                url: `/location/${id}`,
                responseHandler: async (response: Response) => {
                    const json = await response.json();
                    return json;
                },
            }),
        }),
        getEpisodes: builder.query<IGetEpisodesResponse, IGetEpisodes>({
            query: ({ page, name, episode }) => ({
                url: `/episodes/?page=${page}&name=${name}&episode=${episode}`,
            }),
        }),
        getEpisode: builder.query<IGetEpisodeResponse, number>({
            query: (id) => ({
                url: `/episode/${id}`,
            }),
        }),
    }),
});

export const {
    useGetCharactersQuery,
    useLazyGetCharacterQuery,
    useGetCharacterQuery,
    useGetLocationsQuery,
    useLazyGetLocationsQuery,
    useGetLocationQuery,
    useLazyGetLocationQuery,
    useGetEpisodesQuery,
    useGetEpisodeQuery,
} = apiSlice;
