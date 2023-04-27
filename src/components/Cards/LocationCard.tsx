import React from 'react';
import { LocationCardStyle } from '../../styles/components/LocationCardStyle';
import { ILocationCard } from './interfaces/locationCard.interface';

export function LocationCard({ name, type, dimension, residentCount }: ILocationCard) {
    return <LocationCardStyle />;
}
