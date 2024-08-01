import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import Root from "./Pages/Root/Root";
import Login from "./Pages/Root/Children/Login/Login";
import Register from "./Pages/Root/Children/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Welcome from "./Pages/Welcome/Welcome";

import Loading from "./Components/Loading/Loading";
import WithAuth from "./Components/WithAuth/WithAuth";
import MainMenu from "./Pages/MainMenu/MainMenu";
import Social from "./Pages/Social/Social";
import MyFriends from "./Pages/Social/SubPages/MyFreinds/MyFriends";
import SearchFriends from "./Pages/Social/SubPages/SearchFriends/SearchFriends";
import PendingInvitations from "./Pages/Social/SubPages/PendingInvitations/PendingInvitations";






// TODO
const redirectIfUser = () => {

    return null
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                index: true,
                element: (
                <Suspense fallback={<Loading/>}>
                    <Welcome/>
                </Suspense>),
            },
            {
                path: '/login',
                loader: redirectIfUser,
                element: (
                <Suspense fallback={<Loading/>}>
                    <Login/>
                </Suspense>),

            },
            {
                path: '/register',
                element: (
                <Suspense fallback={<Loading/>}>
                    <Register/>
                </Suspense>)
            },
        ]
    },
    {
        path: '/mainMenu',
        element: (
            <WithAuth redirectPath="/">
                <MainMenu />
            </WithAuth>
        )
    },
    {
        path: "/social",
        element: <Social/>,
        children: [
            {
                index: true,
                element: (
                <Suspense fallback={<Loading/>}>
                    <WithAuth redirectPath="/">
                        <SearchFriends/>
                    </WithAuth>
                </Suspense>)
            },
            {
                path: 'social/my',
                element: (
                <Suspense fallback={<Loading/>}>
                    <WithAuth redirectPath="/">
                        <MyFriends/>
                    </WithAuth>
                </Suspense>)
            },
            {
                path: 'social/pendingInvitations',
                element: (
                <Suspense fallback={<Loading/>}>
                    <WithAuth redirectPath="/">
                        <PendingInvitations/>
                    </WithAuth>
                </Suspense>)
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;
