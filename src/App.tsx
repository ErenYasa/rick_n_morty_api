import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setMobileView } from './store/slices/app.slice';
import { Logo } from './components/Icons/Icons';

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

    return (
        <>
            <div>
                <Logo width="210px" height="60" />
            </div>
        </>
    );
}

export default App;
