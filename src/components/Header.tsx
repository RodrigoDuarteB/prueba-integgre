import { FC } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {

}

const Header: FC<HeaderProps> = (props) => {
    return (
        <div className='flex bg-primaryDark py-5 rounded-b-lg justify-center'>
            <Link to='/' className='text-primary font-semibold text-4xl'>
                Banco Credit Sussie
            </Link>
        </div>
    )
}

export default Header