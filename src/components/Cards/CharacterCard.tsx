import React from 'react';
import { Bottom, Card, Detail, Image, Name } from '../../styles/components/CharacterCardStyle';
import { ICharacterCard } from './interfaces/characterCard.interface';
import * as Icon from '../Icons/Icons';

export function CharacterCard({ status, name, species }: ICharacterCard) {
    return (
        <Card>
            <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
            <Bottom>
                <Name>{name}</Name>
                <Detail status={status}>
                    <Icon.Dot />
                    {status} - {species}
                </Detail>
            </Bottom>
        </Card>
    );
}
