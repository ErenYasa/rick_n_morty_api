import { type PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { IAppState } from '../interfaces/app.store.interface';

const initialState: IAppState = {
    appLoading: true,
    mobileView: window.innerWidth < 768,
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
    },
});

export const { setAppLoading, setMobileView } = appSlice.actions;

export default appSlice.reducer;
