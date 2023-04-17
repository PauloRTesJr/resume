import styles from './background.module.scss';

export function Background() {
  return (
    <div className={styles['background']}>
      <div className={styles['geometric']}></div>
    </div>
  );
}

export default Background;
