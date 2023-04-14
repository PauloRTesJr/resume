import styles from './work-section.module.scss';

/* eslint-disable-next-line */
export interface WorkSectionProps {
  company: string;
  job: string;
  period: string;
  description: string;
  technologies: string[];
}

export function WorkSection({
  company,
  job,
  period,
  description,
  technologies,
}: WorkSectionProps) {
  return (
    <div className={styles['container']}>
      <h2>
        {company} - {job}
      </h2>
      <p className={styles['period']}>{period}</p>
      <p>
        <i>{description}</i>
      </p>
    </div>
  );
}

export default WorkSection;
