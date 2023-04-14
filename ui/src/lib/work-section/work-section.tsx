import styles from './work-section.module.scss';

/* eslint-disable-next-line */
export interface WorkSectionProps {
  company: string;
  job: string;
  period: string;
  description: string;
  technologies: string[];
}

export function WorkSection(props: WorkSectionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WorkSection!</h1>
    </div>
  );
}

export default WorkSection;
