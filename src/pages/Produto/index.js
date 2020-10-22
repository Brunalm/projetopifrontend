import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Produto() {
    const [produtos, setProdutos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function loadProdutos() {
            const response = await api.get('/produtos');

            setProdutos(response.data);
        }

        loadProdutos();
    }, []);

    return (
        <div className="container">
            <ul className="produtos-list">
                {produtos.map(produto => (
                    <li key={produto.id}>
                        <header 
                            onClick={() => history.push(`/produtos/${produto.id}`)}
                            style={{ backgroundImage: `url(${produto.fotos[0] && produto.fotos[0].url})`}}/>
                        <strong>{produto.nome}</strong>
                        <span>{produto.descricao}</span>
                        <span>{produto.cor}</span>
                        <span>{produto.tamanho}</span>
                        <span>{`R$${produto.preco}`}</span>
                    </li>
                ))}
            </ul>   
        </div>
    )
}