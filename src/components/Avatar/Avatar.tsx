import styled, { css } from 'styled-components';

enum AvatarSize {
  S = '32px',
  M = '48px',
  L = '64px',
  XL = '96px',
}

interface Props {
  src?: string;
  alt: string;
  size?: keyof typeof AvatarSize;
  initials?: string;
  initialsLength?: number;
  shape?: 'square' | 'circle';
  color?: string;
}

const StyledAvatar = styled.div<{
  size: string;
  shape: 'square' | 'circle';
  color: string;
}>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${(props) => props.size} * 0.55);
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${(props) => props.color};
  color: white;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${(props) =>
    props.shape === 'circle'
      ? css`
          border-radius: 50%;
        `
      : css`
          border-radius: 4px;
        `}
`;

const Avatar: React.FC<Props> = ({
  src,
  alt,
  size = 'M',
  initials,
  initialsLength = 2,
  shape = 'circle',
  color = '#63B3ED',
}) => {
  return (
    <StyledAvatar size={AvatarSize[size]} shape={shape} color={color}>
      {src ? <img src={src} alt={alt} /> : initials?.slice(0, initialsLength)}
    </StyledAvatar>
  );
};

export default Avatar;
