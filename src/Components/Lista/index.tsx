import { useState } from 'react';
import Item from './Item';
import style from  './Lista.module.scss';
import {Itarefa} from '../types/tarefa';

interface Props {
  tarefas: Itarefa[];
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void;
}

const Lista = ({ tarefas, selecionaTarefa }: Props) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item {...item} 
          key={item.id} 
          selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Lista;