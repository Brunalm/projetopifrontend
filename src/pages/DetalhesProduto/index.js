import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

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
                            <span className="nome">{produto.nome}</span>

                            <FotosProduto />
                        </>
                    )
                    : <span>carregando...</span>
            }
        </div>
    )

}