import React, { useState, useMemo } from 'react';

import camera from '../../assets/camera.svg';

import './styles.css';
import api from '../../services/api';

export default function NovoProduto() {
    const [foto, setFoto] = useState(null);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [cor, setCor] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [preco, setPreco] = useState('');

    const preview = useMemo(() => {
        return foto ? URL.createObjectURL(foto) : null;
    }, [foto])

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('fotos', foto);
        formData.append('nome', nome);
        formData.append('descricao', descricao);
        formData.append('cor', cor);
        formData.append('tamanho', tamanho);
        formData.append('preco', preco);
    
        //chamada para a api
        const response = await api.post(
            'produtos',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            },
          );
        if (response.data){
            alert(`Novo produto: ${response.data.produto.nome} cadastrado com sucesso!`);
            clearFields(); //chamando função
        } else {
            alert("Erro ao cadastrar produto!");
        }
      }

      function clearFields(){
        setFoto(null);
        setNome('');
        setDescricao('');
        setCor('');
        setTamanho('');
        setPreco('');
      }

    return (
        <div className="novo-produto-container">
        <div className="novo-produto-content">
            <p>
                Cadastro de Produto
            </p>
            <form onSubmit={handleSubmit}>
                <label 
                id="foto"
                style={{ backgroundImage: `url(${preview})` }}
                className={foto ? 'has-foto' : ''}
                >
                    <input type="file" onChange={event => setFoto(event.target.files[0])} />
                    <img src={camera || preview} alt="Selecione a imagem" />
                </label>
                
                <label htmlFor="nome">NOME *</label>
                <input
                    type="nome" id="nome"
                    required="required"
                    placeholder="Digite o nome do produto"
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                />

                <label htmlFor="descricao">DESCRICAO *</label>
                <input
                    type="descricao" id="descricao"
                    required="required"
                    placeholder="Digite a descrição do produto"
                    value={descricao}
                    onChange={event => setDescricao(event.target.value)}
                />

                <label htmlFor="cor">COR</label>
                <input
                    type="cor" id="cor"
                    placeholder="Digite a cor do produto"
                    value={cor}
                    onChange={event => setCor(event.target.value)}
                />

                <label htmlFor="tamanho">TAMANHO *</label>
                <input
                    type="tamanho" id="tamanho"
                    required="required"
                    placeholder="Digite o tamanho do produto"
                    value={tamanho}
                    onChange={event => setTamanho(event.target.value)}
                />

                <label htmlFor="preco">PREÇO *</label>
                <input
                    type="preco" id="preco"
                    required="required"
                    placeholder="Digite o preco do produto"
                    value={preco}
                    onChange={event => setPreco(event.target.value)}
                />

                <button type="submit" className="btn">Cadastrar Produto</button>
                <script>
                    
                </script>
            </form>
        </div>
        </div>
    )
}