import { PostForms } from '../PostForms'
import styles from '../../styles/componentes/NovoPostBotao.module.css'

export function NovoPostBotao() {

  return (
    <button 
      className={styles.botao}
      onClick={() => PostForms()}
    >+</button>
  )
}