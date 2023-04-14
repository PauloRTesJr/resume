import styles from './chip.module.scss';

/* eslint-disable-next-line */
export interface ChipProps {
  title: string;
  bgColor: string;
}

export function Chip({ title, bgColor }: ChipProps) {
  return (
    <div style={{ background: bgColor }} className={styles['container']}>
      <h1>Welcome to Chip!</h1>
    </div>
  );
}

export default Chip;
