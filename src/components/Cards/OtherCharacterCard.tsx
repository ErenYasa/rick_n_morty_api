import { ICharacter } from 'src/store/api/interfaces/character.interfaces';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CharacterName,
    Detail,
    DetailBottom,
    DetailTop,
    Right,
} from '../../styles/components/Cards/OtherCharacterCardStyle';
import { Image } from '../Image/Image';

type Props = {
    character: ICharacter;
};

export default function OtherCharacterCard({ character }: Props) {
    const { id, name, location, gender, image } = character;
    const navigate = useNavigate();

    const handleClick = () => {
        if (id) navigate(`/detail/${id}`);
    };
    return (
        <Card title={name} onClick={() => handleClick()}>
            <Image src={image} />
            <Right>
                <CharacterName>{name}</CharacterName>
                <Detail>
                    <DetailTop>{location.name} Dimension</DetailTop>
                    <DetailBottom>
                        {location.name} - {gender}
                    </DetailBottom>
                </Detail>
            </Right>
        </Card>
    );
}
