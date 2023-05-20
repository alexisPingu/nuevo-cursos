import React from 'react'
import { Navegacion } from "./Navegacion";
import { Crud } from "./Crud";
import './style.css'

export const Clase2 = () => {
    
    const temas = ['Tema 1. Introduccion',
     'Tema 2. Hosting', 
     'Tema 3. Herramientas para hacer una api con php',
     'Tema 4. Instalación de Framework para la api con php',
     'Tema 5. Creando Base de datos y tala para la api con php',
     'Tema 6. Analizando métodos de la api con php',
     'Tema 7. Acceso a Base de datos y lectura de datos con la api en php',
     'Tema 8. Insertar datos en la base de datos usando la api con php',
     'Tema 9. Borrando datos en la base de datos usando la api con php',
     'Tema 10. Actualizar datos en la base de datos usando la api con php',
     'Tema 11. Consulta datos en la base de datos usando la api con php',
     'Tema 12. Base de datos en el hosting',
     'Tema 13. Subiendo la API al hosting'
    ]
    return (
        <div className='container dos'>
            <Navegacion></Navegacion>

                
                <div class="ratio ratio-21x9">
                    <iframe src={'https://www.youtube.com/embed/V4cqpC6VcGI'} title="YouTube video" allowfullscreen></iframe>
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
