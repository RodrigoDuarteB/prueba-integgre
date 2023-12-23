import { Solicitud } from "../models/interfaces"
import { v4 } from 'uuid'
import LocalStorageService from './storage';

class SolicitudService {
    
    guardarSolicitud(solicitud: Partial<Solicitud>): Solicitud {
        var nuevaSolicitud = {
            ...solicitud,
            id: v4(), 
            estado: 'Pendiente',
            montoAprobado: 0,
        }
        var solicitudes = LocalStorageService.getData('solicitudes')
        if(!solicitudes){
            solicitudes = []
        }
        solicitudes.push(nuevaSolicitud)
        LocalStorageService.saveData('solicitudes', solicitudes)
        return nuevaSolicitud as Solicitud
    }

    editarSolicitud(id: string, datos: Partial<Omit<Solicitud, 'id'>>): Solicitud {
        var solicitudes = this.obtenerSolicitudes()
        var solicitud = solicitudes.find(solicitud => solicitud.id === id)
        if(!solicitud)
            throw new Error('No existe la solicitud')
        Object.assign(solicitud, datos)
        LocalStorageService.saveData('solicitudes', solicitudes)
        return solicitud
    }

    obtenerSolicitudes(): Array<Solicitud> {
        var solicitudes = LocalStorageService.getData('solicitudes')
        return solicitudes ?? []
    }

}

export default new SolicitudService