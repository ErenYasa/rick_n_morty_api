import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    CharacterDetailContainer,
    OtherCharacters,
    OtherCharactersContainer,
    OtherCharactersTitle,
} from '../styles/Views/CharacterDetailStyle';
import CharacterDetailCard from '../components/Cards/CharacterDetailCard';
import OtherCharacterCard from '../components/Cards/OtherCharacterCard';
import { ICharacter } from '../store/api/interfaces/character.interfaces';
import { useLazyGetCharacterQuery } from '../store/api/api.slice';

export default function CharactersDetail() {
    const [characterDetail, setCharacterDetail] = useState<ICharacter>();
    const { id } = useParams();

    const [getCharacter, { data: characterData, isLoading }] = useLazyGetCharacterQuery({});

    useEffect(() => {
        if (id) getCharacter(id);
    }, [id, characterData]);

    useEffect(() => {
        if (characterData) setCharacterDetail(characterData[0]);
    }, [characterData]);

    return (
        <CharacterDetailContainer>
            {!isLoading && characterDetail ? (
                <Fragment>
                    <CharacterDetailCard details={characterDetail} />
                    <OtherCharactersContainer>
                        <OtherCharactersTitle>Other Characters</OtherCharactersTitle>
                        <OtherCharacters>
                            <OtherCharacterCard />
                        </OtherCharacters>
                    </OtherCharactersContainer>
                </Fragment>
            ) : (
                <div>LOADING</div>
            )}
        </CharacterDetailContainer>
    );
}
