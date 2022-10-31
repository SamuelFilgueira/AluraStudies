import React from "react";
import Botao from "../Botao";
import { Itarefa } from "../types/tarefa";
import style from "./Formulario.module.scss";
import {v4 as uuidv4} from "uuid";
import {useState} from 'react';

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}

const Formulario = ({setTarefas}: Props) => {

  const [tarefa, setTarefa] = useState<string>("");
  const [tempo, setTempo] = useState<string>("00:00");

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,    
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa("");
    setTempo("00:00")
  }

  return (
    <form
      className={style.novaTarefa}
      onSubmit={adicionarTarefa}
    >
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={event => setTarefa(event.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar "
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={event => setTempo(event.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>  
      <Botao type="submit" texto="Adicionar" />
    </form>
  );
}

export default Formulario;
