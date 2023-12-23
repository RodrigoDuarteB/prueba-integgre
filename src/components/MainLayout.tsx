import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Breadcrumb from './Breadcrumb'

interface MainLayoutProps {

}

const MainLayout: FC<MainLayoutProps> = (props) => {
    return (
        <div>
            <Header />
            <Breadcrumb />
            <div className='flex flex-row bg-gray-100 text-gray-800'>
                <Sidebar />
                <main className="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0 min-h-screen">
                    <div className="h-full bg-white shadow-lg py-4 px-3 rounded-lg shadow-secondaryLight w-full">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MainLayout