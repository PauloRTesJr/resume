import styles from './skill.module.scss';

/* eslint-disable-next-line */
export interface SkillProps {
  name: string;
  score: number;
  color: string;
}

export function Skill({ name, score, color }: SkillProps) {
  const percentage = score * 20;

  return (
    <div>
      <h2>{name}</h2>
      <div className={styles['progress-bar']}>
        <div
          className={styles['progress-bar-fill']}
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}

export default Skill;
