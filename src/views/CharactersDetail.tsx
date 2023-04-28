import React from 'react';
import { CharacterDetailContainer } from '../styles/Views/CharacterDetailStyle';
import CharacterDetailCard from '../components/Cards/CharacterDetailCard';

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
            <div>other characters</div>
        </CharacterDetailContainer>
    );
}
