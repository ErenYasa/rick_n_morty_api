import React from 'react';
import { CharacterDetailCardStyle } from '../styles/components/CharacterDetailCardStyle';
import { CharacterDetailContainer } from '../styles/Views/CharacterDetail';

export default function CharactersDetail() {
    return (
        <CharacterDetailContainer>
            <CharacterDetailCardStyle
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
