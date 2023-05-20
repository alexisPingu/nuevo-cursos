import React from 'react'
import { Navegacion } from "./Navegacion";
import './style.css'
import { useNavigate } from 'react-router-dom';


export const Miscursos = () => {
    const navigate = useNavigate()

    const verclase = (numero) => {
        if(numero==1){
            navigate('/clase')
        }else{
            navigate('/clase2')
        }
        
    }
    return (
        <div className='container dos'>
            <Navegacion></Navegacion>
            <div class="card">
                <div class="card-header">
                    Curso completo desde cero React
                </div>
                <div class="card-body">
                    <h5 class="card-title">Clase #10</h5>
                    <p class="card-text">Crear un CRUD con react</p>
                    <progress value={50} max={100} className='col-12'></progress>
                    <button className='btn btn-info' onClick={()=>verclase(1)}>Ver clase</button>
                </div>

            </div>
            <br />
            <div class="card">
                <div class="card-header">
                    Curso completo desde cero PHP
                </div>
                <div class="card-body">
                    <h5 class="card-title">Empieza el curso</h5>
                    <p class="card-text">Crear una API con php</p>
                    <progress value={1} max={100} className='col-12'></progress>
                    <button className='btn btn-info' onClick={()=>verclase(2)}>Ver clase</button>
                </div>

            </div>

        </div>

    )
}
