import React from "react";
import "./doces.css";
import ProductCard from "../../../components/productcard/productcard"; // ajuste para o novo componente

// IMPORTAÇÃO CERTA DAS IMAGENS
import paoDeMelImg from "../../../assets/images/paodemelsabores.jpg";
import coneRecheadoImg from "../../../assets/images/conerecheadocard.jpg.webp";
import boloDePoteImg from "../../../assets/images/bolodepotebutton.jpe";
import brownieImg from "../../../assets/images/browniebutton.jpg.webp";
import geladinhoImg from "../../../assets/images/geladinhogourmetcard.jpeg";

const produtosDoces = [
  {
    id: 1,
    nome: "Pão de Mel",
    sabores: ["Brigadeiro", "Doce de Leite", "Prestígio."],
    preco: "R$ 8,00",
    imagem: paoDeMelImg,
  },
  {
    id: 2,
    nome: "Cone Recheado",
    sabores: ["Tradicional", "Brigadeiro", "Leite em pó", "Maracujá", "Prestígio."],
    preco: "R$ 8,00",
    imagem: coneRecheadoImg,
  },
  {
    id: 3,
    nome: "Bolo de Pote",
    sabores: [
      "Dois amores",
      "Napolitano",
      "Ameixa c/ coco",
      "Ninho c/ Nutella",
      "Prestígio",
      "Leite Ninho",
      "Ninho Morango",
      "Doce de leite c/ abacaxi",
      "Cenoura",
      "Ninho c/ abacaxi.",
    ],
    preco: "R$ 14,00",
    imagem: boloDePoteImg,
  },
  {
    id: 4,
    nome: "Brownie Tamanho P",
    sabores: ["Ninho c/ Nutella", "2 amores", "Ninho c/ morango", "Doce de leite."],
    preco: "R$ 10,00",
    imagem: brownieImg,
  },
    {
    id: 4,
    nome: "Brownie Tamanho G",
    sabores: ["Ninho c/ Nutella", "2 amores", "Ninho c/ morango", "Doce de leite."],
    preco: "R$ 15,00",
    imagem: brownieImg,
  },
  {
    id: 5,
    nome: "Geladinho Gourmet",
    sabores: [
      "Coco",
      "Maracujá",
      "Limonada suiça",
      "Morango",
      "Iogurte c/ geleia de morango",
      "Chocolate",
      "Manga.",
    ],
    preco: "R$ 6,00",
    imagem: geladinhoImg,
  },
];

const Doces = () => {
  return (
    <div className="doces-container">
      <h1 className="doces-title">Doces</h1>
      <div className="doces-subtitle">os melhores docinhos de Mauá</div>

      <div className="doces-cards-list">
        {produtosDoces.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
            onAdicionar={() => console.log(`Adicionou: ${produto.nome}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Doces;
