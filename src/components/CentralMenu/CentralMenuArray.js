import prato from "../../assets/images/pratos.png";
import salada from "../../assets/images/frutas.png";
import sobremesa from "../../assets/images/sobremesa.png";
import bebida from "../../assets/images/bebida.png";

export const menuCategories = ["pratos", "saladas", "sobremesas", "bebidas"];

export const menuArray = [
  {
    id: 1,
    image: prato,
    category: menuCategories[0],
    name: "Tacos",
    price: 0,
  },
  {
    id: 5,
    image: prato,
    category: menuCategories[0],
    name: "Quesadilla",
    price: 0,
  },
  {
    id: 2,
    image: salada,
    category: menuCategories[1],
    name: "Banana",
    price: 0,
  },
  {
    id: 3,
    image: sobremesa,
    category: menuCategories[2],
    name: "Torta",
    price: 0,
  },
  {
    id: 4,
    image: bebida,
    category: menuCategories[3],
    name: "Guarana",
    price: 0,
  },
];
