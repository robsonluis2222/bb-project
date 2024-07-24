import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PageTwo.css'

const PageTwo = () => {


  return (
    <div className='page1-frame'>
      <Link className='linker' to='/step3'>
      <div className='next-btn-page2'>
        <span>CONTINUAR</span>
      </div>
      </Link>
      <Navbar />
      <div className='navegacao-frame'>
        <i className="bi bi-arrow-left" id='arrow-left'></i>
        <span className='title-of-pages'>Acessar conta</span>
      </div>
      <div className='solicitacao-1'>
        <span className='titulo-solicitacao'>Informe seus dados</span>
        <span className='subtitulo-solicitacao'>Informe os dados para acessar sua conta:</span>
      </div>
      <div className='entradas-1'>
        <span id='titulo-especifico-edit'>CPF</span>
        <input type="text" />
        <span className='titulo-entrada' id='titulo-especifico-edit'>Telefone</span>
        <input type="text" />
        <span className='titulo-entrada' id='titulo-especifico-edit'>Senha de 6 dígitos</span>
        <input type="text" />
        <span className='subtitulo-solicitacao'>A mesma que é usada no aplicativo</span>
      </div>
    </div>
  )
}

export default PageTwo