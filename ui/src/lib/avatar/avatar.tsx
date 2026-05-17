import styles from './avatar.module.scss';

export interface AvatarProps {
  src: string;
  alt: string;
  size: number;
}

export function Avatar({ src, alt, size }: AvatarProps) {
  return (
    <span
      className={styles['wrapper']}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img
        className={styles['image']}
        src={src}
        alt={alt}
        style={{
          width: `${size - 8}px`,
          height: `${size - 8}px`,
        }}
      />
    </span>
  );
}

export default Avatar;
