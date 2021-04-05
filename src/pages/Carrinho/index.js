import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { BiMinus, BiPlus, BiLeftArrowAlt } from 'react-icons/bi';

import './styles.css';
import { useCarrinho } from '../../hooks/useCarrinho';

export default function Carrinho() {
    
    const history = useHistory();
    const carrinho = useCarrinho();

    return (
            <div className="carrinho-container">
                { carrinho && carrinho.itens.map((produto,index) => (
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
                            <button type="button" onClick={() => carrinho.modificarQuantidade(index,false)}>
                                <BiMinus size={20} color="#013005" />
                            </button>
                            <button type="button" onClick={() => carrinho.modificarQuantidade(index,true)}>
                                <BiPlus size={20} color="#013005" />
                            </button>
                            <p><b>Total:</b> R${produto.quantidade * produto.preco}</p>
                        </div>
                        <button type="button" onClick={() => carrinho.removerItem(index)}>
                            <FiX size={20} color="#013005"/>
                        </button>
                    </div>
                ))}
                <footer className="carrinho-footer">
                <div className="start">
                <div className="continuar-comprando"> 
                    <Link to="/produtos">
                    <BiLeftArrowAlt size={30} color="#013005"/>Continuar Comprando
                    </Link>
                </div>
                </div>
                <div className="end">
                <div className="carrinho-total">
                    <p><b>Total:</b> R${carrinho && carrinho.total}</p>  
                </div>
                <div className="finalizar-compra">
                    <button className="btnFinalizar" type="button" onClick={() => history.push("/finalizar-compra")}>Finalizar Compra</button>       
                </div>
                </div>
                </footer>
            </div>
            
    )
}