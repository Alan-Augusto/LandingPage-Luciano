import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { AiOutlineUserDelete, AiOutlineAlert } from "react-icons/ai";
import { BiDrink } from "react-icons/bi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsBookmarkStar } from "react-icons/bs";
const sizeIcons = "2em";
const colorIcons = "var(--tertiary)";
const colorCard = "none";
const colorText = "var(--secundary)";
const colorTextMark = "var(--secundary-2)";

/*
  --primary: #ffffff;
  --secundary: #000000;
  --secundary-2: #4a4a4a20;
  --tertiary: #f9e745;
  --quaternary:#e1347f;
  --quinary: #46C8E0;
  --box-shadow: 0 0 1.5rem rgba(0 0 0 / 0.1);
*/

const services = [
  {
    title: "Bares e Restaurante",
    description: ["Piso Salarial", "Hora Extra", "Freelance/Autônomo", "FGTS em Gorjeta", "Horas de Almoço/Janta", "Insalubridade"],
    icon: <BiDrink size={sizeIcons} color={"red"} />,
    linkTo: "",
    colorTextMark: colorTextMark,
    colorCard: colorCard,
    colorText: colorText,
    special: true,
  },
  {
    title: "Rescisão e Contrato de Trabalho",
    description: ["Anulação de Recisão de Contrato", "Anulação de Justa Causa", "Rescisão Indireta e Pedido de Demissão"],
    icon: <AiOutlineUserDelete size={sizeIcons} color={colorIcons} />,
    linkTo: "",
    colorTextMark: colorTextMark,
    colorCard: colorCard,
    colorText: colorText,
  },
  {
    title: "Horas e Remuneração",
    description: ["Horas Extras e de Intervalo", "Adicional Noturno", "Salário e Comissões"],
    icon: <MdOutlineMoneyOffCsred size={sizeIcons} color={colorIcons} />,
    linkTo: "",
    colorTextMark: colorTextMark,
    colorCard: colorCard,
    colorText: colorText,
  },
  {
    title: "Função e Condições de Trabalho",
    description: ["Desvio de Função", "Acúmulo de Função", "Equiparação Salarial", "Insalubridade e Acidente de Trabalho", "Doença Ocupacional"],
    icon: <VscWorkspaceTrusted size={sizeIcons} color={colorIcons} />,
    linkTo: "",
    colorTextMark: colorTextMark,
    colorCard: colorCard,
    colorText: colorText,
  },
  {
    title: " Serviços Especiais",
    description: ["Cuidadora de Idosos", "Empregada Doméstica", "Dano Moral", "Dano Material", "Discriminação"],
    icon: <BsBookmarkStar size={sizeIcons} color={colorIcons} />,
    linkTo: "",
    colorTextMark: colorTextMark,
    colorCard: colorCard,
    colorText: colorText,
  },
];

export { services };
