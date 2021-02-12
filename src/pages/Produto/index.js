import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
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
        <div className="produto-container">
            
            <ul className="produtos-list">
                {produtos.map(produto => (
                    <li key={produto.id}>
                        <header 
                            onClick={() => history.push(`/produtos/${produto.id}`)}
                            style={{ backgroundImage: `url(${produto.fotos[0] && produto.fotos[0].url})`}}/>
                        <strong>{produto.nome}</strong>
                        <span>{`R$${produto.preco}`}</span>
                    </li>
                ))}
            </ul> 

            {/*<button className="btn" type="submit">
                <Link to="/criar-produto">Cadastrar Produto</Link>
                </button>*/}
        
        </div>
    )
}