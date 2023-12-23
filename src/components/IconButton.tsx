import { CSSProperties, FC } from 'react'

interface IconButtonProps {
    icon: JSX.Element
    onClick: VoidFunction
    label?: string
    labelClassName?: string
}

const IconButton: FC<IconButtonProps> = (props) => {
    return (
        <div 
            className='hover:cursor-pointer flex flex-col items-center'
            onClick={props.onClick}
        >
            {props.icon}
            {props.label && <span className={`font-semibold text-lg ${props.labelClassName ?? ''}`}>{props.label}</span>}
        </div>
    )
}

export default IconButton