import { Store, configureStore } from '@reduxjs/toolkit';
import App from './slices/app.slice';
import { apiSlice } from './api/api.slice';

export const store: Store = configureStore({
    reducer: {
        App,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
