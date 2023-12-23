import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import Solicitud from "../pages/tarjetas/Solicitud";
import Solicitadas from "../pages/tarjetas/Solicitadas";
import Aprobadas from "../pages/tarjetas/Aprobadas";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'tarjetas',
                children: [
                    {
                        path: 'solicitar',
                        element: <Solicitud />
                    },
                    {
                        path: 'solicitadas',
                        element: <Solicitadas />
                    },
                    {
                        path: 'aprobadas',
                        element: <Aprobadas />
                    },
                ]
            },
        ]
    }
])