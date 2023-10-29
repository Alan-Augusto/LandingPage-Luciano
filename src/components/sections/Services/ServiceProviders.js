import { MdElderlyWoman } from 'react-icons/md';
const sizeIcons = '2em';
const colorIcons="var(--secundary)"
const colorCard="var(--secundary-2)"
const colorText="var(--secundary)"

const services = [
    {
        title: "Rescisão e Contrato de Trabalho",
        description: [
            "Anulação de Recisão de Contrato",
            "Anulação de Justa Causa",
            "Rescisão Indireta e Pedido de Demissão"
        ],
        icon: <MdElderlyWoman size={sizeIcons}/>,
        linkTo:"",
        colorIcon: colorIcons,
        colorCard: colorCard,
        colorText: colorText
    },
    {
        title: "Horas e Remuneração",
        description:[ 
            "Horas Extras e de Intervalo",
            "Adicional Noturno",
            "Salário e Comissões"
        ],
        icon: <MdElderlyWoman size={sizeIcons}/>,
        linkTo:"",
        colorIcon: colorIcons,
        colorCard: colorCard,
        colorText: colorText
    },
    {
        title: "Danos e Discriminação",
        description: [
            "Dano Moral", 
            "Dano Material", 
            "Dano Estético",
            "Dano Existencial",
            "Discriminação"
        ],
        icon: <MdElderlyWoman size={sizeIcons}/>,
        linkTo:"",
        colorIcon: colorIcons,
        colorCard: colorCard,
        colorText: colorText
    },
    {
        title: "Função e Condições de Trabalho",
        description: [
            "Desvio de Função",
            "Acúmulo de Função",
            "Equiparação Salarial",
            "Insalubridade e Acidente de Trabalho",
            "Doença Ocupacional"
        ],
        icon: <MdElderlyWoman size={sizeIcons}/>,
        linkTo:"",
        colorIcon: colorIcons,
        colorCard: colorCard,
        colorText: colorText
    },
    {
        title: " Serviços Especiais",
        description: [
            "Cuidadora de Idosos",
            "Empregada Doméstica"
        ],
        icon: <MdElderlyWoman size={sizeIcons}/>,
        linkTo:"",
        colorIcon: colorIcons,
        colorCard: colorCard,
        colorText: colorText
    },
];


export { services };