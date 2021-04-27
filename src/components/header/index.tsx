import React from 'react';
import { Wrapper, Container, Group, Text } from './styles/header';

type HeaderType = {
  Group: React.FC<{ handleClick?: () => void }>;
  Text: React.FC;
};

const Header: React.FC & HeaderType = ({ children, ...restProps }) => {
  return (
    <Wrapper>
      <Container {...restProps}>{children}</Container>
    </Wrapper>
  );
};

const HeaderGroup: React.FC<{ handleClick?: () => void }> = ({ handleClick, children, ...restProps }) => {
  return (
    <Group onClick={handleClick} {...restProps}>
      {children}
    </Group>
  );
};
Header.Group = HeaderGroup;

const HeaderText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Header.Text = HeaderText;

export default Header;
