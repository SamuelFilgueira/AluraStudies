import Cronometro from "../Components/Cronometro";
import Formulario from "../Components/Formulario";
import Lista from "../Components/Lista";
import style from "./App.module.scss";
import { useState } from "react";
import { Itarefa } from "../Components/types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Itarefa | undefined>();

  const selecionaTarefa = (tarefaSelecionada: Itarefa) => {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map((tarefa) => (
      {
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      }
    )));
  };

  const finalizaTarefa = () => {
    if(selecionado){
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => 
          tarefasAnteriores.map(tarefa => {
            if(tarefa.id === selecionado.id){
              return{
                ...tarefa ,
                selecionado: false,
                completado: true,
              }
            }else {
              return tarefa
            }
          })
        )
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro finalizaTarefa={finalizaTarefa} selecionado={selecionado} />
    </div>
  );
}

export default App;
