import React from 'react';
import { FilterButtons } from '../components/FilterButtons/FilterButtons';

export default function Locations() {
    return (
        <div>
            <FilterButtons status="alive" />
            <FilterButtons status="dead" />
            <FilterButtons status="unknown" />
        </div>
    );
}
