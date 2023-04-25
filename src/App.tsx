import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setMobileView } from './store/slices/app.slice';
import { Logo } from './components/Icons/Icons';
import { FilterButton } from './styles/components/FilterButtons';

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
                <br />
                <br />
                <FilterButton status="ALIVE" />
            </div>
        </>
    );
}

export default App;
