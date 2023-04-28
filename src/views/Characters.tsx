import React, { Fragment } from 'react';
import { CharacterCard } from '../components/Cards/CharacterCard';
import { CharacterCardContainer, FilterBtnContainer, FilterTitle, Filters } from '../styles/Views/CharactersStyle';
import { FilterButtons } from '../components/Buttons/FilterButtons';

export default function Characters() {
    return (
        <Fragment>
            <Filters>
                <FilterTitle>Filter by status: </FilterTitle>
                <FilterBtnContainer>
                    <FilterButtons status="alive" />
                    <FilterButtons status="dead" />
                    <FilterButtons status="unknown" />
                </FilterBtnContainer>
            </Filters>
            <CharacterCardContainer>
                <CharacterCard name="MC Bob" status="alive" species="Human" />
            </CharacterCardContainer>
        </Fragment>
    );
}
