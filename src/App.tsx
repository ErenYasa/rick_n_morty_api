import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setMobileView } from './store/slices/app.slice';
import { Routes } from './routes/app.router';

function App() {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) dispatch(setMobileView(true));
        });

        return () => {
            window.addEventListener('resize', () => {
                if (window.innerWidth < 768) dispatch(setMobileView(true));
            });
        };
    }, []);

    return <Routes />;
}

export default App;
