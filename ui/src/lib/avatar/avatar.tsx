export interface AvatarProps {
  src: string;
  alt: string;
  size: number;
}

export function Avatar({ src, alt, size }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: `${size}px`, height: `${size}px`, borderRadius: '50%' }}
    />
  );
}

export default Avatar;
