import styled from 'styled-components';
import { Theme } from '../../Theme';

export const Card = styled.div`
    display: grid;
    grid-template-columns: 9rem 1fr;
    column-gap: 1.4rem;
    cursor: pointer;
`;

export const Right = styled.div``;

export const CharacterName = styled.p`
    font-size: ${() => Theme.typography.large};
    font-weight: 600;
`;

export const Detail = styled.div``;

export const DetailTop = styled.p`
    margin-bottom: auto.5rem;
    font-size: ${() => Theme.typography.mid};
`;

export const DetailBottom = styled.p`
    font-size: ${() => Theme.typography.mid};
    font-weight: 300;
    font-style: italic;
    color: ${() => Theme.colors.textLight};
`;
