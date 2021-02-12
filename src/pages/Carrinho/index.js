import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FotosProduto from '../../components/FotosProduto';

import './styles.css';
import { render } from '@testing-library/react';

export default function Carrinho() {
    const [carrinho, setCarrinho] = useState([]);
    const [totalCarrinho, setTotalCarrinho] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function loadCarrinho() {
            const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            
            setTotalCarrinho(carrinho.reduce((acc, curr) => {
                const total = curr.quantidade * curr.preco;
                acc += total;
                return acc;
            }, 0));

            setCarrinho(carrinho);
        }

        loadCarrinho();
    }, []);

    return (
        <body>
            <div className="carrinho-container">
                {carrinho.map(produto => (
                    <div key={produto.id} className="carrinho-produto">
                        <img src={produto.fotos[0].url} alt="produto" className="produto-fotos"/>
                        <div className="produto-descricao">
                            <h3>{produto.nome}</h3>
                            <p>{produto.descricao}</p>
                        </div>
                        <div className="produto-precos">
                            <div className="precos-detalhes">
                                <p><b>Preço:</b> R${produto.preco}</p>
                                <p><b>Quantidade:</b> {produto.quantidade}</p>
                            </div>
                            <p><b>Total:</b> R${produto.quantidade * produto.preco}</p>
                        </div>
                    </div>
                ))}
                <div className="carrinho-total">
                    <p><b>Total:</b> R${totalCarrinho}</p>
                </div>            
            </div>
        </body>
    )
}