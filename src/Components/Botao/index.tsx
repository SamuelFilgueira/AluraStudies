import style from './Botao.module.scss';

interface Props {
  texto: string;
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
}

const Botao = ({texto, type = "button", onClick} : Props) => {
  return(
    <button onClick={onClick} type={type} className={style.botao}>
      {texto}
    </button>
  )
}
export default Botao;