import React, { useState } from 'react';
import { useMemo } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';

import './styles.css';

import api from '../../services/api';
import { useCarrinho } from '../../hooks/useCarrinho';

export default function FinalizarCompra() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [telefone, setTelefone] = useState('');

    const [cep, setCep] = useState('');
    const [entrega, setEntrega] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const [nome_cartão, setNomeCartao] = useState('');
    const [cpf_titular, setCpfTitular] = useState('');
    const [numero_cartao, setNumeroCartao] = useState('');
    const [codigo_segurança, setCodigoSeguranca] = useState('');
    const [validade, setValidade] = useState('');

    const history = useHistory();
    const carrinho = useCarrinho();

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('sobrenome', sobrenome);
        formData.append('email', email);
        formData.append('cpf', cpf);
        formData.append('nascimento', nascimento);
        formData.append('telefone', telefone);

        formData.append('cep', cep);
        formData.append('entrega', entrega);
        formData.append('endereco', endereco);
        formData.append('numero', numero);
        formData.append('complemento', complemento);
        formData.append('bairro', bairro);
        formData.append('cidade', cidade);
        formData.append('estado', estado);

        formData.append('nome_cartao', nome_cartão);
        formData.append('cpf_titular', cpf_titular);
        formData.append('numero_cartao', numero_cartao);
        formData.append('codigo_segurança', codigo_segurança);
        formData.append('validade', validade);

        const produtos_ids = carrinho.itens.map(produto => produto.id);
        formData.append('produtos_ids', produtos_ids);

        await api.post('/pedidos', formData);
    }

    const cepValue = useMemo(
        () => {
          let i = 0;
          const cepPattern = "#####-###";
          const cepStr = cep.toString();
       
          return cepPattern.replace(/#/g, () => cepStr[i++] || '');
        },
       [cep],
       );

return (
    <div className="finalizar-compra-container">
    <div id="esquerda"> 
        <p>
            DADOS PESSOAIS
        </p>
        <form onSubmit={handleSubmit} >
            <label htmlFor="nome">Nome *</label>
            <input
                type="text" id="nome"
                required="required"
                autoComplete="off"
                value={nome}
                onChange={event => setNome(event.target.value)}
            />

            <label htmlFor="sobrenome">Sobrenome *</label>
            <input
                type="text" id="sobrenome"
                required="required"
                autoComplete="off"
                value={sobrenome}
                onChange={event => setSobrenome(event.target.value)}
            />

            <label htmlFor="email">E-mail *</label>
            <input
                type="email" id="email"
                required="required"
                autoComplete="off"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <label htmlFor="cpf">CPF *</label>
            <input
                type="text" id="cpf"
                required="required"
                max={13}
                autoComplete="off"
                placeholder="999.999.999-99"
                value={cpf}
                onChange={event => setCpf(event.target.value)}
            />

            <label htmlFor="nascimento">Data de Nascimento *</label>
            <input
                type="nascimento" id="nascimento"
                required="required"
                placeholder="99/99/9999"
                value={nascimento}
                onChange={event => setNascimento(event.target.value)}
            />

            <label htmlFor="telefone">Telefone *</label>
            <input
                type="telefone" id="telefone"
                required="required"
                placeholder="(99)99999-9999"
                value={telefone}
                onChange={event => setTelefone(event.target.value)}
            />
            <div className="ir-para">
            Ir para Entrega <BiRightArrowAlt size={20} color="#014408"/>
            </div>
        </form>
        </div>

        <div id="meio"> 
        <p>
            ENTREGA
        </p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="cep">CEP *</label>
            <input
                type="cep" id="cep"
                required="required"
                value={cepValue}
                onChange={event => setCep(event.target.value)}
            />

            <label htmlFor="entrega">Escolha um tipo de entrega *</label>
            <select id="text" 
            className="entrega" 
            required="required"
            onChange={event => setEntrega(event.target.value)} >
                <option value="pac">Normal - PAC - R$ 20,00 </option>
                <option value="sedex">Expressa - SEDEX - R$ 27,00 </option>
            </select>

            <label htmlFor="endereco">Endereço *</label>
            <input
                type="text" id="endereco"
                required="required"
                value={endereco}
                onChange={event => setEndereco(event.target.value)}
            />

            <label htmlFor="numero">Número *</label>
            <input
                type="numero" id="numero"
                required="required"
                value={numero}
                onChange={event => setNumero(event.target.value)}
            />

            <label htmlFor="complemento">Complemento</label>
            <input
                type="text" id="complemento"
                placeholder="Opcional"
                value={complemento}
                onChange={event => setComplemento(event.target.value)}
            />

            <label htmlFor="bairro">Bairro *</label>
            <input
                type="text" id="bairro"
                required="required"
                value={bairro}
                onChange={event => setBairro(event.target.value)}
            />

            <label htmlFor="cidade">Cidade *</label>
            <input
                type="text" id="cidade"
                required="required"
                value={cidade}
                onChange={event => setCidade(event.target.value)}
            />

            <label htmlFor="estado">Estado *</label>
            <input
                type="text" id="estado"
                required="required"
                value={estado}
                onChange={event => setEstado(event.target.value)}
            />
            <div className="ir-para">
            Ir para Pagamento <BiRightArrowAlt size={20} color="#014408"/>
            </div>
        </form>
        </div>

        <div id="direita"> 
        <p>
            PAGAMENTO
        </p>
        <form onSubmit={handleSubmit}>
        <label htmlFor="nome-cartão">Nome Impresso no Cartão *</label>
            <input
                type="text" id="nome-cartão"
                required="required"
                value={nome_cartão}
                onChange={event => setNomeCartao(event.target.value)}
            />
            <label htmlFor="cpf-titular">CPF do Titular *</label>
            <input
                type="cpf-titular" id="cpf-titular"
                required="required"
                placeholder="999.999.999-99"
                value={cpf_titular}
                onChange={event => setCpfTitular(event.target.value)}
            />
            <label htmlFor="numero-cartão">Número do cartão *</label>
            <input
                type="numero-cartão" id="numero-cartão"
                required="required"
                placeholder="**** **** **** ****"
                value={numero_cartao}
                onChange={event => setNumeroCartao(event.target.value)}
            />
            <label htmlFor="codigo-segurança">Código de Segurança *</label>
            <input
                type="codigo-segurança" id="codigo-segurança"
                required="required"
                placeholder="***"
                value={codigo_segurança}
                onChange={event => setCodigoSeguranca(event.target.value)}
            />
            <label htmlFor="validade">Validade *</label>
            <input
                type="validade" id="validade"
                required="required"
                placeholder="99/9999"
                value={validade}
                onChange={event => setValidade(event.target.value)}
            />
            <div className="ir-para">
            Confirmar a compra <BiRightArrowAlt size={20} color="#014408"/>
            </div>
        </form>
        </div>

        <div id="direita1"> 
        <p>
            RESUMO DO PEDIDO
        </p>
        <form onSubmit={handleSubmit}>
        { carrinho && carrinho.itens.map((produto,index) => (
            <div key={produto.id} className="finalizar-produtos">
                <img src={produto.fotos[0].url} alt="produto" className="produto-fotos"/>
                <div className="produto-infos">
                    <h4>{produto.nome}</h4>
                    <h4>Quantidade: {produto.quantidade}</h4>                 
                </div>    
                </div>     
        ))}

        <div className="resumo-footer">
            <div className="text-spaced">
                <h4>Subtotal:</h4> <h4>R$ {carrinho.total.toFixed(2)}</h4>
            </div>
            <div className="text-spaced">
                <h4>Entrega:</h4> <h4>{entrega === 'sedex' ? '27,00' : entrega === 'pac' ? '20,00' : '' }</h4>
            </div>
            <div className="text-spaced">
                <h4><b>Total:</b></h4> <h4> R$ { (carrinho.total + (entrega === 'sedex' ? 27 : entrega === 'pac' ? 20 : 0)).toFixed(2) }</h4>
            </div>
        </div>
    
        <div className="confirmar-compra">
            <button className="btnConfirmaCompra" type="submit">Confirmar Compra</button>
        </div>
        <div className="continuar-comprando"> 
                    <Link to="/carrinho">
                    <BiLeftArrowAlt size={20} color="#013005"/>Voltar para o carrinho
                    </Link>
                </div>
                </form>
        </div>
        
    </div>
)
    }
