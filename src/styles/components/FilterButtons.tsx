import classNames from 'classnames';
import { IFilterButtons } from './interfaces/filterButton.interface';

export const FilterButton = ({ status }: IFilterButtons) => {
    const classes = classNames(`filter-button f-button-${status}`);

    return <button className={classes}>{status}</button>;
};
