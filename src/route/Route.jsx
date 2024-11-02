import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Home from "../page/Home";
import Tread from "../pages/Tread/Tread";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'trade',
                element: <Tread></Tread>
            },
            {
                path: 'lucide',
                element: <p>more</p>
            },
            {
                path: 'brifcase',
                element: <p>brifcase</p>
            },
            {
                path: 'team',
                element: <p>brifcase</p>
            },
            {
                path: 'award',
                element: <p>brifcase</p>
            },
            {
                path: 'rank',
                element: <p>rank</p>
            }
        ]
    }
])

export default Route;