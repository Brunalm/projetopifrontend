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
        <div className="detalhes-produto-container">
            {
                produto
                    ? (
                        <>
                            <aside id="direita">
                                <FotosProduto fotos={produto.fotos}/>
                            </aside> 
                            <main>
                                <ul>
                                    <li>
                                        <strong>{produto.nome}</strong>
                                        <span>{`R$${produto.preco}`}</span>
                                        <span>{produto.tamanho}</span>
                                    </li>
                                </ul>  
                            </main>
                            <aside id="direita">
                            {produto.descricao}
                            </aside>
                        </>
                    )
                    : <span>carregando...</span>
            }
        </div>
    )

}