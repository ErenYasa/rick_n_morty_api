import styled, { css } from 'styled-components';
import { Theme } from '../../Theme';
import { PHONE, textClamp } from '../../abstracts/Mixins';

export const Card = styled.div`
    padding: 1.5rem 2.5rem;
    border-radius: ${Theme.radius.primary};
    background-color: ${Theme.colors.primary};
    cursor: pointer;

    ${PHONE(css`
        padding: 1.5rem;
    `)}
`;

export const Header = styled.div`
    margin-bottom: 1rem;
    font-size: ${Theme.typography.large};
    font-weight: 500;

    ${textClamp(1)}
`;

export const Content = styled.div``;

export const DetailRow = styled.div`
    display: flex;

    &:not(:last-child) {
        margin-bottom: 0.2rem;
    }
`;

export const DetailRowLeft = styled.div`
    width: 30%;
    flex: 1 1 auto;
    white-space: nowrap;
    font-size: ${Theme.typography.small};
`;

export const DetailRowRight = styled.div`
    width: 60%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: ${Theme.typography.small};
    font-weight: 500;
`;
