import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import MyProjects from "../pages/MyProjects/MyProjects";
import AboutMe from "../components/Home/AboutMe/AboutMe";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'myProjects',
                element: <MyProjects></MyProjects>
            },

        ]
    }
])

export default router;