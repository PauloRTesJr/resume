import styles from './background.module.scss';

export function Background() {
  return (
    <div className={styles['background']} aria-hidden="true">
      <div className={styles['geometric']}>
        <span className={styles['orb']}></span>
      </div>
    </div>
  );
}

export default Background;
