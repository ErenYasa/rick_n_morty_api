import React from 'react';
import {
    Card,
    CharacterName,
    Detail,
    DetailBottom,
    DetailTop,
    Right,
} from '../../styles/components/OtherCharacterCardStyle';
import { Image } from '../Image/Image';

export default function OtherCharacterCard() {
    return (
        <Card>
            <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
            <Right>
                <CharacterName>Japheth’s Grandson</CharacterName>
                <Detail>
                    <DetailTop>Narnia Dimension</DetailTop>
                    <DetailBottom>Narnian - Male</DetailBottom>
                </Detail>
            </Right>
        </Card>
    );
}
