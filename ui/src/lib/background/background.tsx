import styles from './background.module.scss';
import bg from './images/bg.jpg';

export function Background() {
  return (
    <div className={styles['background']}>
      <img src={bg} alt="background" className={styles['backgrounds']} />
    </div>
  );
}

export default Background;
