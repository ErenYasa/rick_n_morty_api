import styled from 'styled-components';
import { Theme } from '../Theme';
import * as Icon from '../../components/Icons/Icons';
import { ICharacterDetailCardStyle } from './interfaces/characterDetailCardStyle.interface';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.9rem;
    cursor: pointer;
`;

const Image = styled.img`
    aspect-ratio: 1/1;
    width: 100%;
    height: auto;
    border-radius: ${() => Theme.radius.card};
    background-color: ${() => Theme.colors.placeholderGrey};
`;

const Bottom = styled.div``;

const Name = styled.div`
    margin-bottom: 0.6rem;
    font-size: ${() => Theme.typography.xlarge};
    font-weight: 600;
`;

const Detail = styled.div<{ status: string }>`
    display: flex;
    flex-direction: column;
    font-size: ${() => Theme.typography.mid};

    svg {
        color: ${({ status }) => (status === 'alive' ? '#98CD4D' : status === 'dead' ? '#B90000' : '#B8B8B8')};
    }
`;

const DetailTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.2rem;
`;

const DetailTopLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 500;
`;

const DetailTopRight = styled.div`
    font-size: ${() => Theme.typography.small};
    font-weight: 300;
    font-style: italic;
`;

const DetailBottom = styled.div``;

export const CharacterDetailCardStyle = ({
    status,
    name,
    species,
    gender,
    locationName,
}: ICharacterDetailCardStyle) => (
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
