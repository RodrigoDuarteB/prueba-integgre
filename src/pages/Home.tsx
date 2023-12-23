import { FC } from 'react'
import { Link } from 'react-router-dom'

interface HomeProps {

}

const Home: FC<HomeProps> = (props) => {
    return (
        <div className='flex flex-col'>
            <span className='text-3xl font-semibold px-8'>Bienvenido a Banco Credit Sussie</span>
            <Link to="/tarjetas/solicitar" className='bg-secondaryLight w-fit self-center text-white mt-10 px-5 py-3 rounded-lg shadow-md'>
                Solicitar Tarjeta de Credito
            </Link>
            
        </div>
    )
}

export default Home