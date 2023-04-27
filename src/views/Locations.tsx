import React from 'react';
import { FilterButtons } from '../components/FilterButtons/FilterButtons';
import { Logo } from '../components/Icons/Icons';

export default function Locations() {
    return (
        <div>
            <Logo width="210px" height="60" />
            <br />
            <br />
            <FilterButtons status="alive" />
            <FilterButtons status="dead" />
            <FilterButtons status="unknown" />
        </div>
    );
}
