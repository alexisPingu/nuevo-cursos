import React, { useState } from 'react'
import Swal from 'sweetalert';

export const Crud = () => {
    const [notas, setNotas] = useState([])
    const [uno, setUno] = useState('')
    const [valor,setValor]= useState(-1)
    const [funciones,setFunciones]=useState('Crear nota')
    const handleNotasChanged = (event) => {
        setUno(event.target.value)
    }
    const formSubmit = (event) => {
        event.preventDefault()
       
        if (funciones == 'Crear nota') {
            if (uno=='') {
                Swal("Faltan datos por llenar!", "Verifica todos los campos", "warning")
            } else {
                setNotas([...notas,uno])
                limpiar()
            }
        }else{
            //alert(valor)
            if(valor==-1){
                Swal("No existe el valor", "Verifica todos los campos", "warning")
            }else{
                let datosAct =notas[valor]
                
                datosAct = uno
                
                
                // Copia del hook del arreglo de informacion del alumno
                const copia = [...notas]
            
                copia[valor] = datosAct
                setNotas(copia)
                Swal("Daos actualizados!", "Continue trabajando!", "success")
                setFunciones('Crear nota')
                limpiar()
            }
        }
    }
    const limpiar = () => {
        setUno('')
    }
    //elimnar
    const eliminar = (indice) => {
        Swal({
            title: "Deseas eliminar esta nota",
            text: "No podras recuperar la informacion!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              Swal("Se ha eliminado correctamente!", {
                icon: "success",
              });
              setNotas(notas.filter((_, index) => index !== indice));
            } else {
              Swal("Operacion cancelada");
            }
          });
    }
    const editar = (datos) => {
        //  console.log(indice)
        setFunciones('Guardar')
        setValor(datos.indice)
        setUno(datos.nota)
    }
    return (
        <div className='container'>
            <form onSubmit={formSubmit}>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={handleNotasChanged} value={uno}></textarea>
                    <label for="floatingTextarea">Crea una nota aqui</label>
                </div>
                <br />
                <button type="submit" class="btn btn-primary col-12">{funciones}</button>
            </form>
            <div className='col-12'>
                <table class="table col-5">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#</th>
                            <th scope="col">Nota</th>
                            <th scope="col">Funciones</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {notas.map((nota, index) => (
                                <>
                                 <tr className='text-center'>
                                <th>{index+1}</th>
                                <th scope="row">{nota}</th>
                                <th scope="row" className='text-center'>
                                    <button className='col btn btn-danger' onClick={()=>eliminar(index)}>Eliminar</button>
                                    <button className='col btn btn-primary' onClick={()=>editar({indice:index,nota:nota})}>Actualizar</button>
                                </th>
                                </tr>
                                </>

                            ))}

                   

                    </tbody>
                </table>
            </div>
        </div>


    )
}
