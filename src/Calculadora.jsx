import React, { useState } from 'react';
import './Calculadora.scss';

const Calculadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleOperacao = (operacao) => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (isNaN(numero1) || isNaN(numero2)) {
      setResultado('Por favor, insira números válidos');
      return;
    }

    let res;
    switch (operacao) {
      case '+':
        res = numero1 + numero2;
        break;
      case '-':
        res = numero1 - numero2;
        break;
      case '*':
        res = numero1 * numero2;
        break;
      case '/':
        res = numero2 !== 0 ? numero1 / numero2 : 'Erro: Divisão por zero';
        break;
      default:
        res = null;
    }
    setResultado(res);
  };

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="Digite o primeiro número"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite o segundo número"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="botoes">
        <button onClick={() => handleOperacao('+')}>+</button>
        <button onClick={() => handleOperacao('-')}>-</button>
        <button onClick={() => handleOperacao('*')}>*</button>
        <button onClick={() => handleOperacao('/')}>/</button>
      </div>
      {resultado !== null && <div className="resultado">Resultado: {resultado}</div>}
    </div>
  );
};

export default Calculadora;
