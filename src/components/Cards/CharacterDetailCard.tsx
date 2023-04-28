import React from 'react';
import {
    Bottom,
    Card,
    Detail,
    DetailBottom,
    DetailTop,
    DetailTopLeft,
    DetailTopRight,
    Image,
    Name,
} from 'src/styles/components/CharacterDetailCardStyle';
import * as Icon from '../Icons/Icons';
import { ICharacterCardDetail } from './interfaces/characterDetailCard.interface';

export default function CharacterDetailCard({ name, status, species, locationName, gender }: ICharacterCardDetail) {
    return (
        <Card>
            <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
            <Bottom>
                <Name>{name}</Name>
                <Detail status={status}>
                    <DetailTop>
                        <DetailTopLeft>
                            <Icon.Dot />
                            {status} - {species}
                        </DetailTopLeft>
                        <DetailTopRight>
                            {locationName} - {gender}
                        </DetailTopRight>
                    </DetailTop>
                    <DetailBottom>{locationName}</DetailBottom>
                </Detail>
            </Bottom>
        </Card>
    );
}
