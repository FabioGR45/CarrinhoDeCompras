export default class Produto{
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    idVendedor: number = 0;

    constructor(id: number, nome: string, preco: number, quantidade: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}