import { CSSProperties } from 'react';
import styles from './chip.module.scss';

/* eslint-disable-next-line */
export interface ChipProps {
  title: string;
  bgColor: string;
}

export function Chip({ title, bgColor }: ChipProps) {
  const style = { ['--chip-color' as string]: bgColor } as CSSProperties;
  return (
    <div style={style} className={styles['container']}>
      {title}
    </div>
  );
}

export default Chip;
