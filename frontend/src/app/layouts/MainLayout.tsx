import { Outlet } from "react-router"

const MainLayout = () => {

    return (
        <>
            <p>this is main layout</p>
            <Outlet />
        </>
    )
}

export default MainLayout;