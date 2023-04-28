import styled from 'styled-components';
import { Theme } from '../Theme';
import * as Icon from '../../components/Icons/Icons';
import { ICharacterCardStyle } from './interfaces/characterCardStyle.interface';

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
    font-size: ${() => Theme.typography.large};
    font-weight: 600;
`;

const Detail = styled.div<{ status: string }>`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: ${() => Theme.typography.mid};
    font-weight: 500;

    svg {
        color: ${({ status }) => (status === 'alive' ? '#98CD4D' : status === 'dead' ? '#B90000' : '#B8B8B8')};
    }
`;

const DetailTop = styled.div``;

const DetailBottom = styled.div``;

export const CharacterCardStyle = ({ status, name, species }: ICharacterCardStyle) => (
    <Card>
        <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
        <Bottom>
            <Name>{name}</Name>
            <Detail status={status}>
                <DetailTop>
                    {' '}
                    <Icon.Dot />
                    {status} - {species}
                </DetailTop>
                <DetailBottom></DetailBottom>
            </Detail>
        </Bottom>
    </Card>
);
