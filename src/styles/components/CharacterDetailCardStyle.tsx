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
    font-size: ${() => Theme.typography.xlarge};
    font-weight: 600;
`;

export const Detail = styled.div<{ status: string }>`
    display: flex;
    flex-direction: column;
    font-size: ${() => Theme.typography.mid};

    svg {
        color: ${({ status }) => (status === 'alive' ? '#98CD4D' : status === 'dead' ? '#B90000' : '#B8B8B8')};
    }
`;

export const DetailTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.2rem;
`;

export const DetailTopLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 500;
`;

export const DetailTopRight = styled.div`
    font-size: ${() => Theme.typography.small};
    font-weight: 300;
    font-style: italic;
    color: ${() => Theme.colors.textLight};
`;

export const DetailBottom = styled.div``;
