import { joinClass } from '../../utils'
import styles from "./styles.module.scss";

const Button = ({ buttonLabel, onClickHandler, varient="primary"}: any) => {
  return (
    <>
      {
        varient === 'primary' && 
      <button onClick={onClickHandler} className={styles.primary}>{buttonLabel}</button>
      }
      {
        varient === 'secondary' && 
      <button onClick={onClickHandler} className={styles.secondary}>{buttonLabel}</button>
      }
      {
        varient === 'tertiary' && 
      <button onClick={onClickHandler} className={styles.tertiary}>{buttonLabel}</button>
      }
    </>
  )
}

export default Button