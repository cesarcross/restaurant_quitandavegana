import tacos from "../../assets/images/pratos.png";
import batatasrecheadas from "../../assets/images/batatasrecheadas.png";
import dal from "../../assets/images/dal.png";
import feijoada from "../../assets/images/feijoada.png";

import salada from "../../assets/images/frutas.png";
import avocado from "../../assets/images/avocado.png";
import fattoush from "../../assets/images/fattoush.png";
import bowl from "../../assets/images/bowl.png";

import sobremesa from "../../assets/images/sobremesa.png";
import matcha from "../../assets/images/matcha.png";
import bob from "../../assets/images/bob.png";
import holandesa from "../../assets/images/holandesa.png";

import bebida from "../../assets/images/bebida.png";
import coffee from "../../assets/images/coffee.png";
import tangerina from "../../assets/images/tangerina.png";
import cocktail from "../../assets/images/cocktail.png";

export const menuCategories = ["pratos", "saladas", "sobremesas", "bebidas"];

export const menuArray = [
  {
    id: 1,
    image: tacos,
    category: menuCategories[0],
    name: "Tacos",
    price: 25,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    image: batatasrecheadas,
    category: menuCategories[0],
    name: "Batata doce recheada",
    price: 15,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    image: dal,
    category: menuCategories[0],
    name: "Dal de lentilhas amarelas",
    price: 18,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 4,
    image: feijoada,
    category: menuCategories[0],
    name: "Feijoada vegana",
    price: 32,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 5,
    image: salada,
    category: menuCategories[1],
    name: "Bowl de blueberry",
    price: 20,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 6,
    image: avocado,
    category: menuCategories[1],
    name: "Salada de abacate",
    price: 12,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 7,
    image: fattoush,
    category: menuCategories[1],
    name: "Fattoush",
    price: 15,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 8,
    image: bowl,
    category: menuCategories[1],
    name: "Bowl com hummus",
    price: 24,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 9,
    image: sobremesa,
    category: menuCategories[2],
    name: "Tortas variadas",
    price: 7,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 10,
    image: matcha,
    category: menuCategories[2],
    name: "Sorvete de matchá",
    price: 10,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 11,
    image: bob,
    category: menuCategories[2],
    name: "Bolo Bob Esponja",
    price: 299,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 12,
    image: holandesa,
    category: menuCategories[2],
    name: "Torta Holandesa",
    price: 30,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 13,
    image: bebida,
    category: menuCategories[3],
    name: "Kombucha Sinergia",
    price: 12,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 14,
    image: coffee,
    category: menuCategories[3],
    name: "Xícara de café",
    price: 15,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 15,
    image: tangerina,
    category: menuCategories[3],
    name: "Suco de Tangerina",
    price: 8,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 16,
    image: cocktail,
    category: menuCategories[3],
    name: "Cocktail de beterraba",
    price: 18,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];
