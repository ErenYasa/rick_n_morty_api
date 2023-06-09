import {
    Bottom,
    Card,
    Detail,
    DetailBottom,
    DetailTop,
    DetailTopLeft,
    DetailTopRight,
    Name,
} from '../../styles/components/Cards/CharacterDetailCardStyle';
import * as Icon from '../Icons/Icons';
import { Image } from '../Image/Image';
import { ICharacterCardDetail } from './interfaces/characterDetailCard.interface';

type Props = {
    details: ICharacterCardDetail;
};

export default function CharacterDetailCard({ details }: Props) {
    return (
        <Card>
            <Image src={details.image} />
            <Bottom>
                <Name>{details.name}</Name>
                <Detail status={details.status}>
                    <DetailTop>
                        <DetailTopLeft>
                            <Icon.Dot />
                            {details.status} - {details.species}
                        </DetailTopLeft>
                        <DetailTopRight>
                            {details.location.name} - {details.gender}
                        </DetailTopRight>
                    </DetailTop>
                    <DetailBottom>{details.location.name}</DetailBottom>
                </Detail>
            </Bottom>
        </Card>
    );
}
