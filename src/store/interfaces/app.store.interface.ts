import { CharacterStatus } from '../../components/Buttons/interfaces/filterButton.interface';

export interface IAppState {
    [x: string]: any;
    appLoading: boolean;
    mobileView: boolean;
    filter: CharacterStatus;
}
