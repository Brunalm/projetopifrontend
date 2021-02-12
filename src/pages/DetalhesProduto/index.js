import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import FotosProduto from '../../components/FotosProduto';

export default function DetalhesProduto() {
    const params = useParams();

    const [produto, setProduto] = useState(null);

    async function adicionarCarrinho(e) {
        e.preventDefault();

        // busco o objeto de carrinho dentro do local storage
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        // verificamos se o produto já existe no carrinho
        const index = carrinho.findIndex(produtoCarrinho => produtoCarrinho.id === produto.id);

        console.log(index);
        // caso ele ja exista acrescentamos a quantidade nele
        // caso nao exista criamos ele com quantidade 1
        if (index >= 0) {
            carrinho[index].quantidade += 1;
        } else {
            carrinho.push({
                ...produto,
                quantidade: 1,
            });
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        alert('Produto adicionado ao carrinho');
    }

    useEffect(() => {
        async function loadProduto() {
            const response = await api.get(`/produtos/${params.id}`);

            setProduto(response.data);
            console.log(response.data);
        }

        loadProduto();
    }, [params.id]);

    return (
        <body>
        <div className="detalhes-produto-container">
            {produto ? (
                <>
                <div id="esquerda"> 
                    <FotosProduto fotos={produto.fotos}/>
                </div> 
                <div id="direita">
                    <div id="descricoes">
                        <form id="form-descricao">
                        <ul>
                        <li>
                            <h1><b>{produto.nome}</b></h1>
                            <div id="desc" className="descricao-produto">
                                <p>{produto.descricao}</p>
                                <br />
                                <p>{produto.tamanho}</p>
                            </div>
                            <div id="price"  className="descricao-produto">
                                <h3 id="h3-price">{`R$${produto.preco}`}</h3>
                            </div>
                            <button onClick={adicionarCarrinho} className="btnCadastrar" type="submit">Adicionar ao Carrinho</button>
                        </li>
                        </ul>
                        </form>
                    </div>
                </div>
                </>
                )
                : <span>carregando...</span>
            }
        </div>
        </body>
    )

}