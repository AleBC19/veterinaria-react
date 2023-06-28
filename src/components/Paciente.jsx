import { useState } from 'react';

export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Deseas Eliminar ese paciente? ')
      if(respuesta){
        eliminarPaciente(id)
      }
  }

  return (
    <div className='bg-white mx-5 my-10 shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre {''}
          <span className='font-normal normal-case'>{nombre}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario {''}
          <span className='font-normal normal-case'>{propietario}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>E-mail {''}
          <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta {''}
          <span className='font-normal normal-case'>{fecha}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas {''}
          <span className='font-normal normal-case'>{sintomas}</span>
        </p>

        <div className='flex justify-between'>
          <button 
            type="button"
            className='py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg'
            onClick={()=> setPaciente(paciente)}>
            Editar
          </button>
          <button 
            className='py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg'
            type="button"
            onClick={handleEliminar}>
            Eliminar
          </button>
        </div>
      </div>
  )
}
