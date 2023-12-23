import { FC, useState } from 'react'
import { Button, Form, Input, Alert } from 'antd'
import SolicitudesService from '../../services/solicitudes'

interface SolicitudProps {

}

const validateMessages = {
    required: '${label} es requerido!',
    types: {
        email: '${label} no es un email valido!',
        number: '${label} no es un numero valido!',
    }
};

const onFinish = (values: any) => {
    SolicitudesService.guardarSolicitud(values)
};

const Solicitud: FC<SolicitudProps> = (props) => {
    const [form] = Form.useForm()
    const [mostrarAlerta, setMostrarAlerta] = useState(false)
    
    return (
        <div className='flex flex-col space-y-8'>
            <span className='text-3xl font-semibold px-8'>Solicitud de Tarjeta de Credito</span>

            {mostrarAlerta && <Alert type='success' message='Solicitud enviada Correctamente!' showIcon/> }
            
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                name="nest-messages"
                onFinish={(values) => {
                    onFinish(values)
                    form.resetFields()
                    setMostrarAlerta(true)
                    setTimeout(() => {
                        setMostrarAlerta(false)
                    }, 3000)
                }}
                style={{ maxWidth: 600 }}
                validateMessages={validateMessages}
                className='flex flex-col self-center w-full'
                form={form}
            >
                <Form.Item 
                    name={['nombre']} 
                    label={<span className='font-semibold' style={{fontSize: 18}}>Nombre</span>}
                    rules={[{ required: true }]} 
                    labelAlign='left'
                >
                    <Input size='large'/>
                </Form.Item>

                <Form.Item 
                    name={['ci']} 
                    label={<span className='font-semibold' style={{fontSize: 16}}>Documento de Identidad</span>}
                    rules={[{ required: true }]} 
                    labelAlign='left'
                >
                    <Input size='large'/>
                </Form.Item>

                <Form.Item 
                    name={['email']} 
                    label={<span className='font-semibold' style={{fontSize: 18}}>Correo Electronico</span>}
                    rules={[{ type: 'email', required: true }]} 
                    labelAlign='left'
                >
                    <Input size='large'/>
                </Form.Item>

                <Form.Item 
                    name={['telefono']} 
                    label={<span className='font-semibold' style={{fontSize: 18}}>Telefono</span>} 
                    rules={[{ required: true }]} 
                    labelAlign='left'
                >
                    <Input size='large'/>
                </Form.Item>

                <Form.Item className='self-center'>
                    <Button 
                        htmlType="submit" 
                        className='bg-secondary text-white hover:bg-white' 
                        size='large'
                    >
                        Enviar
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default Solicitud