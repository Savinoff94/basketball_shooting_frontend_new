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
import TrainingRoot from "./Pages/Training/SubPages/TrainingRoot/TrainingRoot";
import ChooseSquad from "./Pages/Training/SubPages/ChooseSquad/ChooseSquad";
import ChooseShooter from "./Pages/Training/SubPages/ChooseShooter/ChooseShooter";
import Shooting from "./Pages/Training/SubPages/Shooting/Shooting";
import ChooseSpot from "./Pages/Training/SubPages/ChooseSpot/ChooseSpot";






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
        path: "/training",
        element: <TrainingRoot/>,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loading/>}>
                        <WithAuth redirectPath="/">
                            <ChooseSquad/>
                        </WithAuth>
                    </Suspense>
                )
            },
            {
                path: 'training/chooseShooter',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <WithAuth redirectPath="/">
                            <ChooseShooter/>
                        </WithAuth>
                    </Suspense>
                )
            },
            {
                path: 'training/shooting',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <WithAuth redirectPath="/">
                            <Shooting/>
                        </WithAuth>
                    </Suspense>
                )
            },
            {
                path: 'training/chooseSpot',
                element: (
                    <Suspense fallback={<Loading/>}>
                        <WithAuth redirectPath="/">
                            <ChooseSpot/>
                        </WithAuth>
                    </Suspense>
                )
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;
