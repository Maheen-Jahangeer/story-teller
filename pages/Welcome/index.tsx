import Button from "../../Components/Button";
import image from "../../assets/images/closed.svg";
import newImage from "../../assets/images/welcome.svg";
import styles from "./styles.module.scss";

const Welcome = () => {
  const onClickHandler = () => {
    console.log('clicked');
  }
  return (
    <div className={styles.welcomeWrapper}>
      <div className={styles.welcomeTitleContainer}>
        <p className={styles.welcomeTitle}>Haven’t you somthing to Say
          to all of us???</p>
          <p className={styles.welcomeSubTitle}>Here is your chance!</p>
      </div>
      <div className={styles.buttonContainer}>
      <Button  buttonLabel="Sign up" onClickHandler={onClickHandler} />
      <span>Or</span>
      <p>already our story teller?</p>
      <Button buttonLabel="Login" varient="secondary" />
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <img src="/images/closed.svg  " alt="Welcome image" className={styles.imageContainerImg}/>
        </div>
      </div>
    </div>
  )
}

export default Welcome