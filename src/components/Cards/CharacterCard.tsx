import React from 'react';
import { CharacterCardStyle } from '../../styles/components/CharacterCardStyle';
import { ICharacterCard } from './interfaces/characterCard.interface';

export function CharacterCard({ status, name, species }: ICharacterCard) {
    return <CharacterCardStyle status={status} name={name} species={species} />;
}
