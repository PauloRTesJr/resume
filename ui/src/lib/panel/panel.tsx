import { ReactNode } from 'react';
import styles from './panel.module.scss';

/* eslint-disable-next-line */
export interface PanelProps {
  children: ReactNode;
}

export function Panel({ children }: PanelProps) {
  return <div className={styles['panel-container']}>{children}</div>;
}

export default Panel;
