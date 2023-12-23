import { FC, ReactNode } from 'react'
import { To } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

interface SidebarButtonProps {
    label: string,
    ruta: To,
    icon?: ReactNode
}

const SidebarButton: FC<SidebarButtonProps> = (props) => {
    return (
        <NavLink to={props.ruta} className={({ isActive }) => `flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700 ${isActive && 'bg-primaryLight text-lime-50'}`}>
            {props.icon && props.icon}

            <span className="mx-2 text-md font-medium">{ props.label }</span>
        </NavLink>
    )
}

export default SidebarButton