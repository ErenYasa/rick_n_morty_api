import { ICharacterCard } from './characterCard.interface';

export interface ICharacterCardDetail extends ICharacterCard {
    gender: string;
    location: {
        name: string;
    };
}
