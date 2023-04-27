import React, { Fragment, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutStyle } from '../styles/layout/LayoutStyle';
import * as Icon from '../components/Icons/Icons';
import { HeaderStyle } from '../styles/components/HeaderStyle';
import { LayoutContainerStyle } from '../styles/components/LayoutContainerStyle';
import { BackButton } from '../components/Buttons/BackButton';

export const Layout: React.FC<{ children: ReactNode; customClass?: string }> = ({
    children,
    customClass,
}): ReactElement => {
    const navigate = useNavigate();
    const location = useLocation();

    const layoutClasses = classNames(customClass);

    return (
        <Fragment>
            <HeaderStyle>
                {location && location.pathname !== '/' && <BackButton onClick={() => navigate(-1)} />}
                <Icon.Logo width="210px" height="60" className="logo" />
            </HeaderStyle>
            <LayoutStyle className={layoutClasses}>
                <LayoutContainerStyle>{children}</LayoutContainerStyle>
            </LayoutStyle>
        </Fragment>
    );
};
