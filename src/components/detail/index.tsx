import React from 'react';
import { Wrapper, Container, Group, Title, Date, Text, Tag, TagGroup, Image, Button } from './styles/detail';

type DetailType = {
  Title: React.FC;
  Date: React.FC;
  Group: React.FC;
  Text: React.FC;
  Tag: React.FC;
  TagGroup: React.FC;
  Image: React.FC;
  Button: React.FC<{ handleClick: () => void }>;
};

const Detail: React.FC & DetailType = ({ children, ...restProps }) => {
  return (
    <Wrapper>
      <Container {...restProps}>{children}</Container>
    </Wrapper>
  );
};

const DetailTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Detail.Title = DetailTitle;

const DetailGroup: React.FC = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};
Detail.Group = DetailGroup;

const DetailDate: React.FC = ({ children, ...restProps }) => {
  return <Date {...restProps}>{children}</Date>;
};
Detail.Date = DetailDate;

const DetailText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Detail.Text = DetailText;

const DetailTag: React.FC = ({ children, ...restProps }) => {
  return <Tag {...restProps}>{children}</Tag>;
};
Detail.Tag = DetailTag;

const DetailTagGroup: React.FC = ({ children, ...restProps }) => {
  return <TagGroup {...restProps}>{children}</TagGroup>;
};
Detail.TagGroup = DetailTagGroup;

const DetailImage: React.FC = ({ children, ...restProps }) => {
  return <Image {...restProps}>{children}</Image>;
};
Detail.Image = DetailImage;

const DetailButton: React.FC<{ handleClick: () => void }> = ({ handleClick, children, ...restProps }) => {
  return (
    <Button onClick={handleClick} {...restProps}>
      {children}
    </Button>
  );
};
Detail.Button = DetailButton;

export default Detail;
