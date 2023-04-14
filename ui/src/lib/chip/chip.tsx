import styles from './chip.module.scss';

/* eslint-disable-next-line */
export interface ChipProps {
  title: string;
  bgColor: string;
}

export function Chip({ title, bgColor }: ChipProps) {
  return (
    <div style={{ background: bgColor }} className={styles['container']}>
      {title}
    </div>
  );
}

export default Chip;
