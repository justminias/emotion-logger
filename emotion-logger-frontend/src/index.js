import React from 'react';
import ReactDOM from 'react-dom/client'
import Body from './Body';
import {Provider} from "react-redux";
import store from './store/store';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home";
import {NewEmotionLog} from "./components/emotion/new/NewEmotionLog";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import {SelectedDateProvider} from "./contexts/SelectedDateContext";

const router = createBrowserRouter([
    {
        path: "",
        element: <Login/>
    },
    {
        path: "main",
        element: <Home/>,
        children: [
            {
                path: "",
                element: <Body/>
            },
            {
                path: "log-emotion",
                element: <NewEmotionLog/>
            },
            {
                path: "edit-log/:logId",
                element: <NewEmotionLog/>
            }
        ]
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "logout",
        element: <Logout/>
    }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <SelectedDateProvider>
            <RouterProvider router={router}/>
        </SelectedDateProvider>
    </Provider>
);