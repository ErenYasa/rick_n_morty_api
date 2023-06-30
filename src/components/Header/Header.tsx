import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BackButton } from '../Buttons/BackButton';
import { HeaderStyle } from '../../styles/components/Header/HeaderStyle';
import * as Icon from '../Icons/Icons';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [locationId, setLocationId] = useState(sessionStorage.getItem('location_id'));

    useEffect(() => {
        setLocationId(sessionStorage.getItem('location_id'));
    }, [location]);

    const manageBackButton = () => {
        let to = '';
        if (location.pathname.includes('characters')) to = '/';
        else if (locationId) to = `/characters/${locationId}`;
        return navigate(to);
    };

    return (
        <HeaderStyle>
            {location && location.pathname !== '/' && <BackButton onClick={() => manageBackButton()} />}
            <Link to="/" className="logo">
                <Icon.Logo width="210px" height="60" />
            </Link>
        </HeaderStyle>
    );
}
