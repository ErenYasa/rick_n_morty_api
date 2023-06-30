import styled from 'styled-components';
import { Theme } from '../Theme';

export const ImageStyle = styled.img`
    aspect-ratio: 1/1;
    width: 100%;
    height: auto;
    border-radius: ${Theme.radius.primary};
    background-color: ${Theme.colors.placeholderGrey};
`;
