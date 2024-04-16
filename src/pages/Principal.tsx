import Lotofacil from "../componets/Lotofacil";
import Megasena from "../componets/Megasena";
import Quina from "../componets/Quina";
import useLoteria from "../hooks/useLoteria";
import "./index.css"

export default function Principal(){
    const {megasena} = useLoteria();
    console.log("Principa", megasena);
    return(
        <>
            {megasena.dataApuracao ?(
                <div className="Principa-bloco">
                    <Megasena/>
                    <Lotofacil/>
                    <Quina/>
                </div>
            ):(
                <div className="principal-carregando">
                    <h3> Carregando...</h3>
                </div>
            )}
        </>
    )
}