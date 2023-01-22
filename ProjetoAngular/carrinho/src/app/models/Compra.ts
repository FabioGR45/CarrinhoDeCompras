import CompraProdutos from './CompraProdutos';

export default interface Compra{
    id: number;
    precoTotal: number;
    idVendedor: number[];
    produtos: CompraProdutos[];
}