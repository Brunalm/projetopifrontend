import { useState, useEffect } from 'react';

export function useCarrinho() {
    const [totalCarrinho, setTotalCarrinho] = useState(0);
    const [carrinho, setCarrinho] = useState(
        () => {
            // busco o objeto de carrinho dentro do local storage
            const storageData = localStorage.getItem('carrinho');

            const carrinhoLocalStorage = JSON.parse(storageData) || [];

            return carrinhoLocalStorage;
        }
    )
    
    function adicionarItem(produto) {
        // verificamos se o produto já existe no carrinho
        const index = carrinho.findIndex(produtoCarrinho => produtoCarrinho.id === produto.id);

        const _carrinho = [...carrinho]

        // caso ele ja exista acrescentamos a quantidade nele
        // caso nao exista criamos ele com quantidade 1
        if (index >= 0) {
            _carrinho[index].quantidade += 1;
        } else {
            _carrinho.push({
                ...produto,
                quantidade: 1,
            });
        }
        //chamando função que irá alterar o valor do estado
        setCarrinho(_carrinho)
    }

    function removerItem(index) {
        //filter: verifica condição dentro da função -> se for true mantém no array, se for false remove do array
        setCarrinho(carrinho.filter((_,itemIndex) => index !== itemIndex))
        alert("Produto removido do carrinho!")
    }

    function modificarQuantidade(index,increment) {
        //... copiar algo
        const item = {...carrinho[index]};
        if (item) {
            if (increment) {
                item.quantidade++;
            }
            else if(item.quantidade>0) {
                item.quantidade--;
            }

            const _carrinho = [...carrinho]
            _carrinho[index] = item;
            setCarrinho(_carrinho);
        }
    }

    useEffect(
        () => {
            localStorage.setItem("carrinho",JSON.stringify(carrinho))
        }, [carrinho]
    )

    useEffect(
        () => {
            setTotalCarrinho(carrinho.reduce((acc, curr) => {
                const total = curr.quantidade * curr.preco;
                acc += total;
                return acc;
            }, 0));
        }, [carrinho]
    )

    return {
        itens: carrinho,
        total: totalCarrinho,
        adicionarItem,
        modificarQuantidade,
        removerItem
    }

}