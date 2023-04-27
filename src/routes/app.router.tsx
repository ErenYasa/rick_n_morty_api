import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Characters from '../views/Characters';
import Locations from '../views/Locations';
import CharactersDetail from '../views/CharactersDetail';
import ErrorPage from '../views/ErrorPage';

export const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Locations />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/characters',
            element: <Characters />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/detail',
            element: <CharactersDetail />,
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};
