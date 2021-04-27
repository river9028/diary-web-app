import React from 'react';
import { Wrapper, Container, Title, Tag, Textarea, Image, Button } from './styles/form';

type ButtonProps = {
  handleClick: () => void;
};

type InputProps = {
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
};

type FormType = {
  Title: React.FC<InputProps>;
  Tag: React.FC<InputProps & { handlePressEnter: () => void }>;
  Textarea: React.FC<InputProps>;
  Image: React.FC<{ src: string }>;
  Button: React.FC<ButtonProps>;
};

const Form: React.FC & FormType = ({ children, ...restProps }) => {
  return (
    <Wrapper>
      <Container onSubmit={(e) => e.preventDefault()} {...restProps}>
        {children}
      </Container>
    </Wrapper>
  );
};

const FormTitle: React.FC<InputProps> = ({ value, handleChange, placeholder, children, ...restProps }) => {
  return (
    <Title {...restProps}>
      <input name='title' value={value} onChange={handleChange} placeholder={placeholder} />
      {children}
    </Title>
  );
};
Form.Title = FormTitle;

const FormTag: React.FC<InputProps & { handlePressEnter: () => void }> = ({
  value,
  handlePressEnter,
  handleChange,
  placeholder,
  children,
  ...restProps
}) => {
  return (
    <Tag
      name='tag'
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          handlePressEnter();
        }
      }}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      {...restProps}
    >
      {children}
    </Tag>
  );
};
Form.Tag = FormTag;

const FormTextarea: React.FC<InputProps> = ({ value, handleChange, placeholder, children, ...restProps }) => {
  return (
    <Textarea
      name='contents'
      value={value}
      onChange={handleChange}
      minRows={30}
      placeholder={placeholder}
      {...restProps}
    >
      {children}
    </Textarea>
  );
};
Form.Textarea = FormTextarea;

const FormImage: React.FC<{ src: string }> = ({ src, children, ...restProps }) => {
  return (
    <Image src={src} {...restProps}>
      {children}
    </Image>
  );
};
Form.Image = FormImage;

const FormButton: React.FC<ButtonProps> = ({ handleClick, children, ...restProps }) => {
  return (
    <Button type='button' onClick={handleClick} {...restProps}>
      {children}
    </Button>
  );
};
Form.Button = FormButton;

export default Form;
