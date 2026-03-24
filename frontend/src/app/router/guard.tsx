import type { UserRole } from '@/shared/types';
import { Outlet } from 'react-router';

export const AuthGuard = () => {
    return <Outlet />;
};

export const RoleGuard = ({ roles }: { roles: UserRole[] }) => {
    console.log(roles);
    return <Outlet />;
};
