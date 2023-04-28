import React from 'react';
import { LocationCard } from '../components/Cards/LocationCard';
import { LocationCardContainer } from '../styles/Views/LocationsStyle';

export default function Locations() {
    return (
        <div>
            <LocationCardContainer>
                <LocationCard />
            </LocationCardContainer>
        </div>
    );
}
