import React from 'react';
import { Wrapper, Container, Group, Title, Info, Img, Text, Tag, Date } from './styles/card';

type TagPropsType = { handleClick: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void };

type CardType = {
  Group: React.FC<{ className?: string }>;
  Info: React.FC;
  Title: React.FC;
  Img: React.FC<{ src: string }>;
  Text: React.FC;
  Tag: React.FC<TagPropsType>;
  Date: React.FC;
};

const Card: React.FC<{ handleClick: () => void }> & CardType = ({ handleClick, children, ...restProps }) => {
  return (
    <Wrapper>
      <Container onClick={handleClick} {...restProps}>
        {children}
      </Container>
    </Wrapper>
  );
};

const CardGroup: React.FC<{ className?: string }> = ({ className, children, ...restProps }) => {
  return (
    <Group className={className} {...restProps}>
      {children}
    </Group>
  );
};
Card.Group = CardGroup;

const CardTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Card.Title = CardTitle;

const CardInfo: React.FC = ({ children, ...restProps }) => {
  return <Info {...restProps}>{children}</Info>;
};
Card.Info = CardInfo;

const CardImg: React.FC<{ src: string }> = ({ src, children, ...restProps }) => {
  return (
    <Img>
      <img src={src} alt='' {...restProps} />
      {children}
    </Img>
  );
};
Card.Img = CardImg;

const CardTag: React.FC<TagPropsType> = ({ handleClick, children, ...restProps }) => {
  return (
    <Tag onClick={handleClick} {...restProps}>
      {children}
    </Tag>
  );
};
Card.Tag = CardTag;

const CardDate: React.FC = ({ children, ...restProps }) => {
  return <Date {...restProps}>{children}</Date>;
};
Card.Date = CardDate;

const CardText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Card.Text = CardText;

export default Card;
