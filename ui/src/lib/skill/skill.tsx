import { CSSProperties } from 'react';
import styles from './skill.module.scss';

/* eslint-disable-next-line */
export interface SkillProps {
  name: string;
  score: number;
  color: string;
}

export function Skill({ name, score, color }: SkillProps) {
  const percentage = score * 20;
  const style = { ['--skill-color' as string]: color } as CSSProperties;

  return (
    <div className={styles['skill']}>
      <div className={styles['header']}>
        <span className={styles['name']}>{name}</span>
        <span className={styles['score']}>{score}/5</span>
      </div>
      <div
        className={styles['progress-bar']}
        role="progressbar"
        aria-label={name}
        aria-valuenow={score}
        aria-valuemin={0}
        aria-valuemax={5}
      >
        <div
          className={styles['progress-bar-fill']}
          style={{ width: `${percentage}%`, ...style }}
        ></div>
      </div>
    </div>
  );
}

export default Skill;
