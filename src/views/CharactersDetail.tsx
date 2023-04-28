import React from 'react';
import {
    CharacterDetailContainer,
    OtherCharacters,
    OtherCharactersContainer,
    OtherCharactersTitle,
} from '../styles/Views/CharacterDetailStyle';
import CharacterDetailCard from '../components/Cards/CharacterDetailCard';
import OtherCharacterCard from '../components/Cards/OtherCharacterCard';

export default function CharactersDetail() {
    return (
        <CharacterDetailContainer>
            <CharacterDetailCard
                name="Japheths Grandson"
                status="dead"
                gender="Male"
                species="Human"
                locationName="Narnia"
            />
            <OtherCharactersContainer>
                <OtherCharactersTitle>Other Characters</OtherCharactersTitle>
                <OtherCharacters>
                    <OtherCharacterCard />
                </OtherCharacters>
            </OtherCharactersContainer>
        </CharacterDetailContainer>
    );
}
