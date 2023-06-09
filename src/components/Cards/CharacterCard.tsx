import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bottom, Card, Detail, Image, Name } from '../../styles/components/Cards/CharacterCardStyle';
import { ICharacterCard } from './interfaces/characterCard.interface';
import * as Icon from '../Icons/Icons';

export function CharacterCard({ id, image, status, name, species }: ICharacterCard) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (id) navigate(`/detail/${id}`);
    };

    return (
        <Card onClick={() => handleClick()}>
            <Image src={image} />
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
