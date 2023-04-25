import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetCharacter, IGetCharacters } from './interfaces/character.interfaces';
import { IGetLocation, IGetLocations } from './interfaces/location.interfaces';
import { IGetEpisode, IGetEpisodes } from './interfaces/episode.interfaces';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api',
    }),
    endpoints: (builder) => ({
        getCharacters: builder.query<IGetCharacters, any>({
            query: (page) => ({
                url: '/character?page=page',
            }),
        }),
        getCharacter: builder.query<IGetCharacter, number>({
            query: (id) => ({
                url: `/character/${id}`,
            }),
        }),
        getLocations: builder.query<IGetLocations, any>({
            query: () => ({
                url: '/locations',
            }),
        }),
        getLocation: builder.query<IGetLocation, number>({
            query: (id) => ({
                url: `/location/${id}`,
            }),
        }),
        getEpisodes: builder.query<IGetEpisodes, any>({
            query: () => ({
                url: '/episodes',
            }),
        }),
        getEpisode: builder.query<IGetEpisode, number>({
            query: (id) => ({
                url: `/episode/${id}`,
            }),
        }),
    }),
});

export const {
    useGetCharactersQuery,
    useGetCharacterQuery,
    useGetLocationsQuery,
    useGetLocationQuery,
    useGetEpisodesQuery,
    useGetEpisodeQuery,
} = apiSlice;
