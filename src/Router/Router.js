import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import CourseDetails from "../components/Pages/CourseDetails/CourseDetails";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import MainLayout from "../Layout/MainLayout";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/signup',
                element: <SignUp />

            },
            {
                path: '/login',
                element: <Login />

            },
            {
                path: '/courses',
                loader: () => fetch('https://learning-platfrom-server-main.vercel.app/courses'),
                element: <Courses />

            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://learning-platfrom-server-main.vercel.app/courses/${params.id}`),
                element: <PrivetRoute><CourseDetails /></PrivetRoute>

            }
        ]
    },
]);