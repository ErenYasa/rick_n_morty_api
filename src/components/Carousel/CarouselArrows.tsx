import classNames from 'classnames';
import * as Icon from '../Icons/Icons';
import { NextArrowStyle, PrevArrowStyle } from '../../styles/components/Carousel/CarouselArrowsStyle';

export function PrevArrow(clickHandler: () => void, hasPrev: boolean, label?: string): React.ReactNode {
    const classes = classNames({ disabled: !hasPrev });

    return (
        <PrevArrowStyle className={classes} onClick={clickHandler}>
            <Icon.PrevArrow color="#000" width="24" height="24" />
        </PrevArrowStyle>
    );
}

export function NextArrow(clickHandler: () => void, hasNext: boolean, label?: string): React.ReactNode {
    const classes = classNames({ disabled: !hasNext });

    return (
        <NextArrowStyle className={classes} onClick={clickHandler}>
            <Icon.NextArrow color="#000" width="24" height="24" />
        </NextArrowStyle>
    );
}
