import classNames from 'classnames';
import { FilterButtonsStyle } from '../../styles/components/Buttons/FilterButtonsStyle';
import { IFilterButtons } from './interfaces/filterButton.interface';
import * as Icon from '../Icons/Icons';

export const FilterButtons = ({ status, disabled }: IFilterButtons) => {
    const classes = classNames({ disabled });

    return (
        <FilterButtonsStyle className={classes} status={status}>
            <Icon.Dot width="12" height="12" />
            {status}
        </FilterButtonsStyle>
    );
};
