import React from 'react'
import { Navegacion } from "./Navegacion";
import { Crud } from "./Crud";
import './style.css'

export const Clase = () => {
    /*const location = useLocation();
    const params = new URLSearchParams(location.search);
    const nombre = params.get('nombre');
    const nuevo = nombre
    
    const [j,setJ]=useState('')
    var video = false;
    if (nuevo === 'react') {
        video = true;
    }
    if(video){
        setJ()
    }*/
    const temas = ['Tema 1. Introduccion', 
    'Tema 2. Construccion de estructura',
     'Tema 3. Consumo de APIS',
     'Tema 4. AGREGAR, BORRAR Y EDITAR',
     'Tema 5. Ajustes finales'
    ]
    return (
        <div className='container dos'>
            <Navegacion></Navegacion>

                
                <div class="ratio ratio-21x9">
                    <iframe src={'https://www.youtube.com/embed/_DJBFUIT2Kg?rel=0'} title="YouTube video" allowfullscreen></iframe>
                </div>

        



            <br />
            <div className='row'>
                <div className='col-9'>
                    <Crud></Crud>
                </div>
                <div className='col-3'>
                    <table class="table col-5">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {temas.map((tema, index) => (
                                <tr>
                                    <th scope="row">{tema}</th>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}
