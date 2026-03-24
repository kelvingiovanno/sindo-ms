import { createBrowserRouter } from 'react-router';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '@/features/auth/pages/LoginPage';
import StoreSelectorPage from '@/features/store/pages/StoreSelectorPage';
import NotFoundPage from '../pages/NotFoundPage';
import { AuthGuard, RoleGuard } from './guard';
import DashboardPage from '@/features/dashboard/pages/DashboardPage';
import InvoicePage from '@/features/invoice/pages/InvoicePage';

const router = createBrowserRouter([
    {
        ErrorBoundary: ErrorPage,
        children: [
            {
                path: 'signin',
                Component: LoginPage,
            },
            {
                path: 'select-store',
                Component: StoreSelectorPage,
            },
            {
                Component: AuthGuard,
                children: [
                    {
                        element: <RoleGuard roles={['ADMIN']} />,
                        children: [
                            {
                                index: true,
                                Component: DashboardPage,
                            },
                        ],
                    },
                    {
                        path: 'invoices',
                        element: <RoleGuard roles={['ADMIN', 'STAFF']} />,
                        children: [
                            {
                                index: true,
                                Component: InvoicePage,
                            },
                            {
                                path: 'create',
                            },
                        ],
                    },
                    {
                        path: 'inventory',
                        element: <RoleGuard roles={['ADMIN', 'STAFF']} />,
                        children: [
                            {
                                index: true,
                            },
                            {
                                path: 'create',
                            },
                        ],
                    },
                ],
            },
            {
                path: '*',
                Component: NotFoundPage,
            },
        ],
    },
]);

export default router;
