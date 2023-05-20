import React, { useState } from 'react'
import './style.css'
import logo from './imgs/robot.png'
import Swal from 'sweetalert';

export const Login = () => {
    //Hooks
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    //Realiza cambios
    const handleUsuarioChanged = (event) => { setUsuario(event.target.value) }
    const handlePasswordChanged = (event) => { setPassword(event.target.value) }
    //Que haces cuando ya tiene los cambios
    const formSubmit = (event) => {
        event.preventDefault()
        if (usuario == 'uriel' && password == 'holamundo') {
            window.location.assign('/cursos');
        }else{
            Swal("Ocurrio un error!", "usuario o contraseña invalida!", "warning");
        }
    }
    return (
        <>
            <div className="background-container">
                <div className='d-flex justify-content-center align-items-center uno'>
                    <div class="card border-primary">
                        <div class="card-header text-center">
                            <h1 className='card-title'>Cursos para Masters</h1>
                            <img src={logo} class="card-img-top rounded-circle" alt="Descripción de la imagen" />
                        </div>
                        <div class="card-body">
                            <form onSubmit={formSubmit}>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={usuario} onChange={handleUsuarioChanged} />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">►</span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" value={password} onChange={handlePasswordChanged} />
                                </div>
                                <div className='text-center'>
                                    <button type='submit' className='btn btn-primary btn-lg '>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
