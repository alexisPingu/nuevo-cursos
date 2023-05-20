import React from 'react'
import { Navegacion } from "./Navegacion";
import './style.css'
import banner1 from './imgs/banner1.png'
import banner2 from './imgs/banner2.png'
import uno from './imgs/python.png'
import dos from './imgs/java.png'
import tres from './imgs/react.png'
import cuatro from './imgs/anaconda.png'
import cinco from './imgs/c.png'
import seis from './imgs/jupyter.png'
import siete from './imgs/latex.png'
import ocho from './imgs/analitica.png'
import nueve from './imgs/mysql.png'
import diez from './imgs/r.png'
import once from './imgs/bootstrap.png'
import doce from './imgs/spring.png'
import Swal from 'sweetalert';



export const Cursos = () => {
    /* const aprendizaje =()=>{
         window.location.assign('/miscursos');
     }*/
    const agregar =()=>{
        Swal("Gracias por comprar el curso!", "Espera 24 horas para que se añada a tu lista de cursos!", "success");
    }
    const listacursos = [
        { nombre: 'Curso de Python', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023', imagen:uno},
        { nombre: 'Curso de Java', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023',imagen:dos },
        { nombre: 'Curso de React', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023',imagen:tres },
        { nombre: 'Curso de Anaconda', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023',imagen:cuatro },
        { nombre: 'Curso de C', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023',imagen:cinco },
        { nombre: 'Curso de Jupyter', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023',imagen:seis },
        { nombre: 'Curso de Latex', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023',imagen:siete },
        { nombre: 'Curso de Analitica Web', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023',imagen:ocho },
        { nombre: 'Curso de MySql', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023',imagen:nueve },
        { nombre: 'Curso de R', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023',imagen:diez },
        { nombre: 'Curso de Bootstrap', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023',imagen:once },
        { nombre: 'Curso de Spring', precio: 129.35, estudiantes: 1000, horas: 12, actualizacion: '19/05/2023',imagen:doce },

    ];
    return (


        <div className='container dos'>
            <Navegacion></Navegacion>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </button>
            </div>
            <div class="card dos">
                <div class="card-header">
                    Para ti
                </div>
                <div class="card-body">
                    <div class="container">
                        <div class="row">
                            {listacursos.map((datos, index) => (
                                <div class="card col-3 cinco">
                                    <img src={datos.imagen} class="card-img-top cuatro" alt="..." height={'200'} width={'100px'} />
                                    <div class="card-body">
                                        <h5 class="card-title">{datos.nombre}</h5>
                                        <p class="card-text">$ {datos.precio}</p>
                                        <p class="card-text">Total de alumnos: {datos.estudiantes}</p>
                                        <p class="card-text">Total de horas: {datos.horas}</p>
                                        <p class="card-text">Ultima actualizacion: {datos.actualizacion}</p>
                                    </div>
                                    <div class="card-body text-center">
                                        <button onClick={agregar} class="btn btn-primary">Añadir a mis cursos</button>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        </div>
        
    )
}
