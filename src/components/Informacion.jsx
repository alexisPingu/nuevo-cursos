import React, {useState} from 'react'
import { Navegacion } from "./Navegacion";
import './style.css'
import Swal from 'sweetalert';


export const Informacion = () => {
    const inicio = {nombre: 'Alexis Uriel',apellidos: 'Martinez Cruz',direccion: 'Av. Independecia S/N Canalejas,Jilotepec',telefono: '5535029885',usuario: 'uriel',pass:'holamundo',correo:'alexisurielmartinezcruz385@gmail.com'}
    const [nombre, setNombre] = useState(inicio.nombre)
    const [apellidos, setApellidos] = useState(inicio.apellidos)
    const [direccion, setDireccion] = useState(inicio.direccion)
    const [telefono, setTelefono] = useState(inicio.telefono)
    const [usuario, setUsuario] = useState(inicio.usuario)
    const [correo, setCorreo] = useState(inicio.correo)
    const [pass,setPass]=useState(inicio.pass)
    const [bandera,setBandera]=useState(false)
    const [funcion, setFuncion]=useState('Actualizar')

    const handleDireccionChanged = (event) => { setDireccion(event.target.value) }
    const handleTelefonoChanged = (event) => { setTelefono(event.target.value) }
    const handleUusarioChanged = (event) => { setUsuario(event.target.value) }
    const handlePasswordChanged = (event) => { setPass(event.target.value) }
    //Que haces cuando ya tiene los cambios
    const formSubmit = (event) => {
        event.preventDefault();
        setBandera(true);
        Swal("Actualizacion correcta", "Ya puedes cambiar de ruta", "success");
    
    }


    return (
        <div className='container dos'>
            <Navegacion></Navegacion>
            <form onSubmit={formSubmit}>
                
                <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={nombre} disabled={true}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Apellidos</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={apellidos} disabled={true}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Direccion</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={direccion} onChange={handleDireccionChanged} required  disabled={bandera}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Telefono</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={telefono} onChange={handleTelefonoChanged}  disabled={bandera}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Nombre de usuario</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={usuario} onChange={handleUusarioChanged}  disabled={bandera}/>
                </div>
                <div class="mb-3">
                    <label class="form-label">Correo electronico</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={true} value={correo}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" required value={pass} onChange={handlePasswordChanged} disabled={bandera}/>
                </div>
                
                <button type="submit" class="btn btn-primary col-12" hidden={bandera}>Guardar cambios</button>
            </form>
        </div>
    )
}
