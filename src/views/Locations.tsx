import React from 'react';
import { FilterButtons } from '../components/Buttons/FilterButtons';
import { LocationCard } from '../components/Cards/LocationCard';
import { LocationCardContainer } from '../styles/Views/LocationsStyle';

export default function Locations() {
    return (
        <div>
            <FilterButtons status="alive" />
            <LocationCardContainer>
                <LocationCard />
            </LocationCardContainer>
        </div>
    );
}
