import { FC } from 'react'
import SidebarButton from './SidebarButton'
import { CheckCircleFilled, ProfileFilled, ScheduleFilled } from '@ant-design/icons'

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = (props) => {
    return (
        <aside className="sidebar w-56 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md shadow-secondaryLight rounded-lg">
            <div className="my-4"></div>
            <div className='flex flex-col space-y-3'>
                <SidebarButton 
                    label='Solicitud de Tarjetas' 
                    ruta={'tarjetas/solicitar'}
                    icon={<ProfileFilled />}
                />
                <SidebarButton 
                    label='Tarjetas Solicitadas' 
                    ruta={'tarjetas/solicitadas'}
                    icon={<ScheduleFilled />}
                />
                <SidebarButton 
                    label='Tarjetas Aprobadas' 
                    ruta={'tarjetas/aprobadas'} 
                    icon={<CheckCircleFilled />}
                />
            </div>
        </aside>
    )
}

export default Sidebar