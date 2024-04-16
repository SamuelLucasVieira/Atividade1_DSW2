import "./index.css"
import teste from "../../assets/trevo-quina.png"
import { useLoteria } from "../../hooks";
export default function Quina(){
    const {quina} = useLoteria();
    
    return(
        <div className="quina-bloco-principal">
            <div>
                <div className="quina-bloco-loteria">
                    <img src={teste} alt="" />
                    <span className="quina-nome-loteria" > Quina</span>
                </div>
                <div className="quina-bloco-estimativa">
                    <div className="quina-texto-estimativa">
                        Estimativa de prêmio do próximo concurso.
                        Sorteio em {quina.dataProximoConcurso}.
                    </div>
                    <div className="quina-valor-estimativa">
                        {quina.valorEstimadoProximoConcurso.toLocaleString("pt-br",{
                            style: "currency",
                            currency: "BRL"
                        })}
                    </div>
                </div>
            </div> 
            <div className="quina-bloco-direita">
                <div className="quina-linha-bola">
                    {
                        quina.dezenas.map(dezena => 
                            <div className="quina-bola">{dezena}</div>
                         )
                    }
                </div>
                <div className="quina-texto-acumulou">
                    {
                        quina.quantidadeGanhadores === 0? 
                        "ACUMULOU!":
                        `${quina.quantidadeGanhadores} GANHADORES`
                    }
                </div>
                <div className="quina-data-concurso">
                    {
                        `Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`
                    }
                </div>
            </div>
        </div>
    );
}   