import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import FotosProduto from '../../components/FotosProduto';

export default function DetalhesProduto() {
    const params = useParams();

    const [produto, setProduto] = useState(null);

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
                            <h1>{produto.nome}</h1>
                                <div id="price">
                                    <h3 id="h3-price">{`R$${produto.preco}`}</h3>
                                </div>
                                    <div id="desc">
                                        <p>{produto.descricao}</p>
                                        <p>{produto.tamanho}</p>
                                    </div>
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