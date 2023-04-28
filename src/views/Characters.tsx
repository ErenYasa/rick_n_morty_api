import React, { Fragment } from 'react';
import { CharacterCard } from '../components/Cards/CharacterCard';
import { CharacterCardContainer, FilterContainer } from '../styles/Views/CharactersStyle';
import { FilterButtons } from '../components/Buttons/FilterButtons';

export default function Characters() {
    return (
        <Fragment>
            <FilterContainer title="Filter by status: ">
                <FilterButtons status="alive" />
                <FilterButtons status="dead" />
                <FilterButtons status="unknown" />
            </FilterContainer>
            <CharacterCardContainer>
                <CharacterCard name="MC Bob" status="alive" species="Human" />
            </CharacterCardContainer>
        </Fragment>
    );
}
