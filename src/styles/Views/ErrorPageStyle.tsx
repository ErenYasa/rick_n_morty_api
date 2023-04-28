import styled from 'styled-components';
import { Theme } from '../Theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    height: 100vh;
`;

export const Title = styled.p`
    font-size: ${() => Theme.typography.xlarge};
    font-weight: 600;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: ${() => Theme.typography.mid};
`;
