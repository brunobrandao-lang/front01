import { useState } from 'react'
import './style.css'

export default function InfoCurso() {
    const [nome, setNome] = useState('Lógica de programação')
    const [cargaHoraria, setCargaHoraria] = useState(162)
    const [turno, setTurno] = useState('Noturno')
    const [semestre, setSemestre] = useState('3 semestre')
    const [ dataInicio, setDataInicio] = useState('03/02/2025')
    const [dataTermino, setDataTermino] = useState('23/07/2025')
 
    return(
        <div className='info-curso'>
            <h2>Dados do curso:</h2>
            <p>Nome: { nome }</p>
            <p>Carga horária: { cargaHoraria }</p>
            <p>Turno: { turno }</p>
            <p>Semestre: { semestre }</p>
            <p>Data de início: { dataInicio }</p>
            <p>Data de término: { dataTermino }</p>

        </div>
    )
    
}