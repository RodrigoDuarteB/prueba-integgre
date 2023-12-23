import { ReactGrid, Column, Row } from '@silevis/reactgrid'
import { FC, useEffect, useState } from 'react'
import { Solicitud } from '../../models/interfaces'
import SolicitudesService from '../../services/solicitudes'
import "@silevis/reactgrid/styles.css"
import { Alert } from 'antd'

interface AprobadasProps {

}

const Aprobadas: FC<AprobadasProps> = (props) => {
    const [aprobadas, setAprobadas] = useState<Solicitud[]>([])
    const [mostrarAlerta, setMostrarAlerta] = useState(false)

    function obtenerSolicitudesAprobadas() {
        return SolicitudesService.obtenerSolicitudes().filter(solicitud => solicitud.estado === 'Aceptada')
    }
    
    useEffect(() => {
        setAprobadas(obtenerSolicitudesAprobadas())
    }, [])

    const columns: Column[] = [
        {
            columnId: 'nombre',
            width: 250,
            resizable: true
        },
        {
            columnId: 'ci',
            width: 250,
            resizable: true
        },
        {
            columnId: 'montoAprobado',
            width: 250,
            resizable: true,
        },
        
    ] 
    const rows: Row[] = [
        {
            rowId: "header",
            cells: [
                {
                    type: 'header',
                    text: 'Nombre',
                },
                {
                    type: 'header',
                    text: 'Carnet de Identidad',
                },
                {
                    type: 'header',
                    text: 'Monto Tarjeta Aprobado',
                },
            ],
        },
        ...aprobadas.map(aprobada => {
            return {
                rowId: aprobada.id,
                cells: [
                    {
                        type: 'text', text: aprobada.nombre, nonEditable: true,
                    },
                    {
                        type: 'text', text: aprobada.ci, nonEditable: true
                    },
                    {
                        type: 'number', value: aprobada.montoAprobado, className: 'bg-lime-300'
                    },
                ]
            } as Row
        })
    ]

    function onCellsChanged(cambios: any) {
        var id = cambios[0].rowId
        var nuevoMonto = cambios[0].newCell.value
        SolicitudesService.editarSolicitud(id, {
            montoAprobado: nuevoMonto ?? 0
        })
        setAprobadas(obtenerSolicitudesAprobadas())
        setMostrarAlerta(true)
        setTimeout(() => {
            setMostrarAlerta(false)
        }, 2000);
    }

    return (
        <div className='flex flex-col space-y-8'>
            <span className='text-3xl font-semibold px-8'>Lista de Solicitudes Aprobadas</span>

            {mostrarAlerta && <Alert type='success' message='Monto de Tarjeta modificado Correctamente!' showIcon/> }
            
            <div className='self-center overflow-x-auto max-w-96 md:max-w-max'>
                <ReactGrid 
                    rows={rows}
                    columns={columns}
                    onCellsChanged={onCellsChanged}
                />
            </div>
        </div>
    )
}

export default Aprobadas