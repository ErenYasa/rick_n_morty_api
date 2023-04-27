import { BackButtonStyle } from '../../styles/components/BackButtonStyle';
import * as Icon from '../Icons/Icons';

interface IBackButton {
    onClick?: () => void;
}

export const BackButton = ({ onClick }: IBackButton) => (
    <BackButtonStyle onClick={onClick}>
        <Icon.BackSign width="31" height="35" />
    </BackButtonStyle>
);
