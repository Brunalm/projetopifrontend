import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import './styles.css';

export default function FotosProduto({
    fotos
}) {

  const [fotoAtual, setFotoAtual] = useState(null);

  useEffect(() => {
    if (fotos && fotos.length > 0) {
      setFotoAtual(fotos[0]);
    }
  }, [fotos]);

  return (
    <div className="fotos-produto-container">
      <div className="foto-atual-container">
        <button className="left">
          <FiChevronLeft size={28} />
        </button>
        <button className="right">
          <FiChevronRight size={28} />
        </button>
        <img src={fotoAtual && fotoAtual.url} alt="produto" className="foto-atual"/>
      </div>
    </div>
  )
}