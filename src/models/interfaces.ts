export type EstadoSolicitud = 'Aceptada' | 'Rechazada' | 'Pendiente'

export interface Solicitud {
    id: string
    nombre: string
    ci: string
    correo: string
    estado: EstadoSolicitud
    telefono: string
    montoAprobado: number
}