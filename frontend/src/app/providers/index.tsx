import { AuthProvider } from './auth/AuthProvider';
import { RouterProvider } from 'react-router';

import router from '../router';

export const AppProvider = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};
