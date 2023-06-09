import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import App from './App';
import { Theme } from './styles/Theme';
import { GlobalStyle } from './styles/base/Global';
import { store } from './store/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Provider>,
);
