import { type PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { IAppState } from '../interfaces/app.store.interface';
import { CharacterStatus } from '../../components/Buttons/interfaces/filterButton.interface';

const initialState: IAppState = {
    appLoading: true,
    mobileView: window.innerWidth < 768,
    filter: CharacterStatus.IDLE,
};

export const appSlice: Slice<IAppState> = createSlice({
    name: 'App',
    initialState,
    reducers: {
        setAppLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.appLoading = payload;
        },
        setMobileView: (state, { payload }: PayloadAction<boolean>) => {
            state.mobileView = payload;
        },
        setFilter: (state, { payload }: PayloadAction<CharacterStatus>) => {
            state.filter = payload;
        },
    },
});

export const { setAppLoading, setMobileView, setFilter, setOtherCharacters } = appSlice.actions;

export default appSlice.reducer;
