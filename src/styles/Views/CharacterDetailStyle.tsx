import styled from 'styled-components';
import { Theme } from '../Theme';

export const CharacterDetailContainer = styled.div`
    display: grid;
    grid-template-columns: 55rem 1fr;
    column-gap: 4.5rem;
`;

export const OtherCharactersContainer = styled.div``;

export const OtherCharactersTitle = styled.p`
    margin-bottom: 2.1rem;
    font-size: ${() => Theme.typography.xlarge};
    font-weight: 600;
`;

export const OtherCharacters = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
`;
