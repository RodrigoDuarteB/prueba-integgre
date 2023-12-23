import { FC, useEffect, useState } from 'react'
import { Alert, List } from 'antd'
import SolicitudesService from '../../services/solicitudes'
import { EstadoSolicitud, Solicitud } from '../../models/interfaces'
import { DislikeFilled, LikeFilled } from '@ant-design/icons'
import IconButton from '../../components/IconButton'

interface SolicitadasProps {

}

const Solicitadas: FC<SolicitadasProps> = (props) => {
    const [solicitudes, setSolicitudes] = useState<Solicitud[]>([])
    const [mostrarAlerta, setMostrarAlerta] = useState(false)

    function cambiarEstadoSolicitud(id: string, estado: EstadoSolicitud) {
        SolicitudesService.editarSolicitud(id, {
            estado
        })
        setSolicitudes(SolicitudesService.obtenerSolicitudes())
        setMostrarAlerta(true)
        setTimeout(() => {
            setMostrarAlerta(false)
        }, 1500);
    }

    useEffect(() => {   
        setSolicitudes(SolicitudesService.obtenerSolicitudes())
    }, [])

    return (
        <div className='flex flex-col space-y-8'>
            <span className='text-3xl font-semibold px-8'>Lista de Solicitudes</span>

            {mostrarAlerta && <Alert type='success' message='Estado de Solicitud modificada Correctamente!' showIcon/> }

            <List
                className='px-20 lg:px-40'
                dataSource={solicitudes}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            title={<span className='text-xl'>{item.nombre}</span>}
                            description={<span className='text-lg'>CI: {item.ci}</span>}
                            className='font-semibold'
                        />
                        {
                            item.estado === 'Pendiente' ? 
                            <div className='flex space-x-4'>
                                <IconButton 
                                    label='Aceptar'
                                    labelClassName='text-green-500'
                                    icon={<LikeFilled style={{ fontSize: 30, color: 'green' }}/>}
                                    onClick={() => cambiarEstadoSolicitud(item.id, 'Aceptada')}
                                />
                                <IconButton 
                                    label='Rechazar'
                                    labelClassName='text-red-500'
                                    icon={<DislikeFilled style={{ fontSize: 30, color: 'red' }}/>} 
                                    onClick={() => cambiarEstadoSolicitud(item.id, 'Rechazada')}
                                />
                            </div>
                            :
                            <span className='text-lg'>La solicitud fue <strong className={`${item.estado === 'Aceptada' ? 'text-green-500' : 'text-red-500'}`}>{item.estado}</strong></span>
                        }
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Solicitadas
