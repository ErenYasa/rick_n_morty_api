import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackButton } from '../Buttons/BackButton';
import { HeaderStyle } from '../../styles/components/Header/HeaderStyle';
import * as Icon from '../Icons/Icons';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <HeaderStyle>
            {location && location.pathname !== '/' && <BackButton onClick={() => navigate(-1)} />}
            <Icon.Logo width="210px" height="60" className="logo" />
        </HeaderStyle>
    );
}
