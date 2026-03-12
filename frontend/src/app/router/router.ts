import { createBrowserRouter } from "react-router";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

import LoginPage from "@/features/auth/LoginPage";
import StoreSelectorPage from "@/features/store/StoreSelectorPage";
import DashboardPage from "@/features/dashboard/DashboardPage";

import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        Component: AuthLayout,
        children: [
            {
                path: 'signin',
                Component: LoginPage,
            }
        ]
    },
    {
        Component: ProtectedRoute,
        children: [
            {
                Component: MainLayout,
                children: [
                    {
                        index: true,
                        Component: DashboardPage,
                    },
                ],
            },
            {
                path: 'select-store',
                Component: StoreSelectorPage,
            },
        ]
    }
])

export default router;