import Avatar from '../Avatar/Avatar';
import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  max: number;
}

const StyledAvatarGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`;

const StyledAvatar = styled(Avatar)<{ max: number }>`
  position: absolute;
`;

const AvatarGroup: React.FC<Props> = ({ children, max = 3 }) => {
  const avatars = React.Children.toArray(children);
  return (
    <StyledAvatarGroup>
      {avatars.slice(0, max).map((avatar, index) => (
        <div
          key={index}
          style={{
            position: 'relative',
            zIndex: -index,
            marginRight: -8,
          }}
        >
          {avatar}
        </div>
      ))}
      {avatars.length > max && (
        <div
          style={{
            position: 'relative',
            zIndex: -max,
            marginRight: -8,
          }}
        >
          <StyledAvatar
            max={max}
            alt="Ds"
            initials={`+${(avatars.length - max).toString()}`}
            shape="circle"
            color="#d1d1d1"
          />
        </div>
      )}
    </StyledAvatarGroup>
  );
};

export default AvatarGroup;
