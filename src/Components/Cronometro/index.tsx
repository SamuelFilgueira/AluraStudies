import style from "./cronometro.module.scss";
import Botao from "../Botao";
import { Relogio } from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
  selecionado: Itarefa | undefined,
  finalizaTarefa: () => void,
}

export default function Cronometro({ selecionado, finalizaTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if(contador > 0){
        setTempo(contador - 1);
        return regressiva(contador - 1)
      };
      finalizaTarefa();
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={() => regressiva(tempo)} texto="Começar!" />
    </div>
  );
}
