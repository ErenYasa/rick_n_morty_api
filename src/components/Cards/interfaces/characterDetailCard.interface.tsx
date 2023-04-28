import { ICharacterCard } from './characterCard.interface';

export interface ICharacterCardDetail extends ICharacterCard {
    gender: string;
    locationName: string;
}
