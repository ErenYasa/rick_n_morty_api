import { useDispatch, useSelector } from 'react-redux';
import { ICharacter } from '../../store/api/interfaces/character.interfaces';
import { RootState } from '../../store';
import { Button, Container, HiddenCheckbox } from '../../styles/components/Buttons/FilterButtonsStyle';
import { CharacterStatus } from './interfaces/filterButton.interface';
import * as Icon from '../Icons/Icons';
import { FilterBtnContainer } from '../../styles/Views/CharactersStyle';
import { setFilter } from '../../store/slices/app.slice';

type Props = {
    filter: CharacterStatus;
    characters?: ICharacter[];
};

export const FilterButtons = ({ filter, characters }: Props) => {
    const { filter: filterState } = useSelector((state: RootState) => state.App);
    const dispatch = useDispatch();

    const handleStatus = (status: CharacterStatus) => {
        dispatch(setFilter(status === filterState ? '' : status));
    };

    const isStatusExists = (status: CharacterStatus) => characters && characters.some((char) => char.status === status);

    return (
        <FilterBtnContainer>
            <Container className={!isStatusExists(CharacterStatus.ALIVE) ? 'disabled' : ''}>
                <HiddenCheckbox name="status_alive" defaultChecked={filter === CharacterStatus.ALIVE} />
                <Button
                    status="Alive"
                    checked={filter === CharacterStatus.ALIVE}
                    onClick={() => handleStatus(CharacterStatus.ALIVE)}>
                    <Icon.Dot width="12" height="12" />
                    Alive
                </Button>
            </Container>
            <Container className={!isStatusExists(CharacterStatus.DEAD) ? 'disabled' : ''}>
                <HiddenCheckbox name="status_dead" defaultChecked={filter === CharacterStatus.DEAD} />
                <Button
                    status="Dead"
                    checked={filter === CharacterStatus.DEAD}
                    onClick={() => handleStatus(CharacterStatus.DEAD)}>
                    <Icon.Dot width="12" height="12" />
                    Dead
                </Button>
            </Container>
            <Container className={!isStatusExists(CharacterStatus.UNKNOWN) ? 'disabled' : ''}>
                <HiddenCheckbox name="status_unknown" defaultChecked={filter === CharacterStatus.UNKNOWN} />
                <Button
                    status="Unknown"
                    checked={filter === CharacterStatus.UNKNOWN}
                    onClick={() => handleStatus(CharacterStatus.UNKNOWN)}>
                    <Icon.Dot width="12" height="12" />
                    Unknown
                </Button>
            </Container>
        </FilterBtnContainer>
    );
};
