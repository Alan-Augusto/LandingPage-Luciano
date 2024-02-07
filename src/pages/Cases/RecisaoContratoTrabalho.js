import CaseDefault from "./Default/CaseDefault";

function RecisaoContratoTrabalho() {
    const cover = 'RecisaoContrato.jpg'
    const Title = "Rescisão de Contrato de Trabalho";
    const Description = "A rescisão de contrato de trabalho pode ser feita de forma amigável ou não.";
    const Data = [
        {
            title:"Recisao",
            content:"A rescisão de contrato de trabalho pode ser feita de forma amigável ou não. A rescisão de contrato de trabalho pode ser feita de forma amigável ou não. A rescisão de contrato de trabalho pode ser feita de forma amigável ou não. A rescisão de contrato de trabalho pode ser feita de forma amigável ou não. A rescisão de contrato de trabalho pode ser feita de forma amigável ou não. A rescisão de contrato de trabalho pode ser feita de forma amigável ou não."
        },
        {
            title:"Recisao",
            content:"A rescisão de contrato de trabalho pode ser feita de forma amigável ou não. A rescisão de contrato de trabalho pode ser feita de forma amigável ou não. A rescisão de contrato de trabalho pode ser feita de forma amigável ou não. A rescisão de contrato de trabalho pode ser feita de forma amigável ou não. A rescisão de contrato de trabalho pode ser feita de forma amigável ou não. A rescisão de contrato de trabalho pode ser feita de forma amigável ou não."
        },
    ]
    
    return (
        <div className="RecisaoContratoTrabalho">
            <CaseDefault Title={Title} Description={Description} Data={Data} Cover={cover} />
        </div>
    )
}
export default RecisaoContratoTrabalho