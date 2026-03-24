import { Navigate, Outlet } from 'react-router';
import { Sidebar } from '@/shared/components/layout/Sidebar';
import { useAuth } from '../providers/auth/useAuth';

const AdminLayout = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <p>auth loading...</p>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }

    return (
        <div className="flex w-full">
            <Sidebar userRole={'ADMIN'} />
            <main className="bg-slate-100 w-full lg:flex-1 h-screen overflow-y-auto">
                <div className="relative max-w-440 mx-auto p-4 pt-22 lg:p-6 space-y-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
