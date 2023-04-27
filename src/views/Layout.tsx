import React, { Fragment, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { LayoutStyle } from '../styles/layout/LayoutStyle';
import { Logo } from '../components/Icons/Icons';
import { HeaderStyle } from '../styles/components/HeaderStyle';

export const Layout: React.FC<{ children: ReactNode; customClass?: string }> = ({
    children,
    customClass,
}): ReactElement => {
    const layoutClasses = classNames(customClass);
    const contentClasses = classNames('page-layout-container');

    return (
        <Fragment>
            <HeaderStyle>
                <Logo width="210px" height="60" />
            </HeaderStyle>
            <LayoutStyle className={layoutClasses}>
                <div className={contentClasses}>{children}</div>
            </LayoutStyle>
        </Fragment>
    );
};
