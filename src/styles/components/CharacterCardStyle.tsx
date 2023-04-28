import styled from 'styled-components';
import { Theme } from '../Theme';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.9rem;
    cursor: pointer;
`;

export const Image = styled.img`
    aspect-ratio: 1/1;
    width: 100%;
    height: auto;
    border-radius: ${() => Theme.radius.card};
    background-color: ${() => Theme.colors.placeholderGrey};
`;

export const Bottom = styled.div``;

export const Name = styled.div`
    margin-bottom: 0.6rem;
    font-size: ${() => Theme.typography.large};
    font-weight: 600;
`;

export const Detail = styled.div<{ status: string }>`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: ${() => Theme.typography.mid};
    font-weight: 500;

    svg {
        color: ${({ status }) => (status === 'alive' ? '#98CD4D' : status === 'dead' ? '#B90000' : '#B8B8B8')};
    }
`;
