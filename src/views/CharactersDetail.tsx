import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterDetailContainer } from '../styles/Views/CharacterDetailStyle';
import CharacterDetailCard from '../components/Cards/CharacterDetailCard';
import { ICharacter } from '../store/api/interfaces/character.interfaces';
import { useLazyGetCharacterQuery } from '../store/api/api.slice';
import OtherCharacters from './OtherCharacters';

export default function CharactersDetail() {
    const { id } = useParams();
    const [characterDetail, setCharacterDetail] = useState<ICharacter>();

    /* QUERIES */
    const [getCharacter, { data: characterData, isLoading }] = useLazyGetCharacterQuery({});

    useEffect(() => {
        if (characterData) setCharacterDetail(characterData[0]);
    }, [characterData]);

    useEffect(() => {
        if (id) getCharacter(id);
    }, [id]);

    // UZUN METİNLER KISALTILACAK
    return (
        <CharacterDetailContainer>
            {!isLoading && characterDetail ? (
                <Fragment>
                    <CharacterDetailCard details={characterDetail} />
                    <OtherCharacters characterData={characterDetail} />
                </Fragment>
            ) : (
                <div>LOADING</div>
            )}
        </CharacterDetailContainer>
    );
}
