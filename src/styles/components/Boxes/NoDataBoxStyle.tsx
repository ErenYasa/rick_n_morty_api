import styled from 'styled-components';
import { Theme } from '../../Theme';

export const NoDataBoxStyle = styled.div<{ widthStatus?: string }>`
    width: ${(props) => props.widthStatus || '50%'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
    padding: 2rem;
    border-radius: ${Theme.radius.primary};
    font-size: ${Theme.typography.large};
    font-weight: 600;
    border: 0.1rem solid ${Theme.colors.SecondaryGrey};
    background: ${Theme.colors.primaryGrey};
`;