import styled from 'styled-components';
import { Theme } from '../Theme';
import { ILocationCardStyle } from './interfaces/locationCardStyle.interface';

const LocationCard = styled.div`
    max-width: 44rem;
    padding: 1.5rem 2.5rem;
    border-radius: ${() => Theme.radius.card};
    background-color: ${() => Theme.colors.primary};
`;

const Header = styled.div`
    margin-bottom: 1rem;
    font-size: ${() => Theme.typography.large};
    font-weight: 500;
`;

const Content = styled.div``;

const DetailRow = styled.div`
    &:not(:last-child) {
        margin-bottom: 0.2rem;
    }
`;

const DetailRowLeft = styled.span`
    font-size: ${() => Theme.typography.small};
`;

const DetailRowRight = styled.span`
    font-size: ${() => Theme.typography.small};
    font-weight: 500;
`;

export const LocationCardStyle = ({ name, type, dimension, residentCount }: ILocationCardStyle) => (
    <LocationCard>
        <Header>Earth (C-137)</Header>
        <Content>
            <DetailRow>
                <DetailRowLeft>Type: </DetailRowLeft>
                <DetailRowRight>planet</DetailRowRight>
            </DetailRow>
            <DetailRow>
                <DetailRowLeft>Dimension: </DetailRowLeft>
                <DetailRowRight>C-123</DetailRowRight>
            </DetailRow>
            <DetailRow>
                <DetailRowLeft>Resident count: </DetailRowLeft>
                <DetailRowRight>23</DetailRowRight>
            </DetailRow>
        </Content>
    </LocationCard>
);
