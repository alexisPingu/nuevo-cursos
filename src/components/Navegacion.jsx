import React from 'react'
import './style.css'

export const Navegacion = () => {
    const cursos=()=>{ window.location.assign('/cursos');}
    const miscursos=()=>{ window.location.assign('/miscursos');}
    const informacion=()=>{ window.location.assign('/informacion');}
    const cerrar=()=>{ window.location.assign('/');}
    return (
        <div className='container'>
            <ul class="nav justify-content-center">
                <li class="nav-item tres">
                    <button onClick={cursos} className='btn btn-outline-primary activate'>Cursos</button>
                </li>
                <li class="nav-item tres">
                    <button onClick={miscursos} className='btn btn-outline-primary'>Mis aprendizajes</button>
                </li>
                <li class="nav-item tres">
                    <button onClick={informacion} className='btn btn-outline-primary'>Mi informacion</button>
                </li>
                <li class="nav-item tres">
                    <button onClick={cerrar} className='btn btn-outline-primary'>Cerrar Sesion</button>
                </li>
            </ul>
            <br />
        </div>


    )
}
