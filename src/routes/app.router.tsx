import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../views/Layout';
import Characters from '../views/Characters';
import Locations from '../views/Locations';
import CharactersDetail from '../views/CharactersDetail';
import ErrorPage from '../views/ErrorPage';

export const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Layout>
                    <Locations />
                </Layout>
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: '/characters/:id',
            element: (
                <Layout>
                    <Characters />
                </Layout>
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: '/detail/:id',
            element: (
                <Layout>
                    <CharactersDetail />
                </Layout>
            ),
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};
