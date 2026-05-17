import { technologies as technologiesData } from '@resume/models';
import Chip from '../chip/chip';
import styles from './work-section.module.scss';
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
  const renderTechnology = (technology: string) => {
    const data = technologiesData[technology];
    return <Chip key={technology} bgColor={data.color} title={data.name} />;
  };
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <h2 className={styles['company']}>{company}</h2>
        <span className={styles['role']}>{job}</span>
      </div>
      <p className={styles['period']}>{period}</p>
      <p className={styles['description']}>{description}</p>
      <div className={styles['technologies']}>
        {technologies.map(renderTechnology)}
      </div>
    </div>
  );
}

export default WorkSection;
