import { ReactNode } from 'react';
import styles from './panel.module.scss';

/* eslint-disable-next-line */
export interface PanelProps {
  children: ReactNode;
  type: 'left' | 'right';
}

export function Panel({ children, type }: PanelProps) {
  return (
    <div className={`${styles['panel-container']} ${styles[type]}`}>
      {children}
    </div>
  );
}

export default Panel;
