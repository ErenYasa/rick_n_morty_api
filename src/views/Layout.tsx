import React, { Fragment, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { LayoutContainer, LayoutStyle } from '../styles/layout/LayoutStyle';
import Header from '../components/Header/Header';

export const Layout: React.FC<{ children: ReactNode; customClass?: string }> = ({
    children,
    customClass,
}): ReactElement => {
    const layoutClasses = classNames(customClass);

    return (
        <Fragment>
            <Header />
            <LayoutStyle className={layoutClasses}>
                <LayoutContainer>{children}</LayoutContainer>
            </LayoutStyle>
        </Fragment>
    );
};
