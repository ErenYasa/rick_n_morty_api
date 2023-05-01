import React from 'react';
import { Bottom, Card, Detail, Image, Name } from '../../styles/components/Cards/CharacterCardStyle';
import { ICharacterCard } from './interfaces/characterCard.interface';
import * as Icon from '../Icons/Icons';

export function CharacterCard({ img, status, name, species }: ICharacterCard) {
    return (
        <Card>
            <Image src={img} />
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
