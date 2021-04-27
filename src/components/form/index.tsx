import React, { useEffect, useRef } from 'react';
import { Wrapper, Container, Title, TagWrapper, Tag, TagInput, Textarea, Image, Button } from './styles/form';

type ClickProps = {
  handleClick: () => void;
};

type InputProps = {
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
};

type FormType = {
  Title: React.FC<InputProps>;
  TagInput: React.FC<InputProps & { handlePressEnter: () => void }>;
  Textarea: React.FC<InputProps>;
  Image: React.FC<{ src: string }>;
  Button: React.FC<ClickProps>;
  Tag: React.FC<ClickProps>;
  TagWrapper: React.FC;
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

const FormTagInput: React.FC<InputProps & { handlePressEnter: () => void }> = ({
  value,
  handlePressEnter,
  handleChange,
  placeholder,
  children,
  ...restProps
}) => {
  return (
    <TagInput
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
    </TagInput>
  );
};
Form.TagInput = FormTagInput;

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

const FormButton: React.FC<ClickProps> = ({ handleClick, children, ...restProps }) => {
  return (
    <Button type='button' onClick={handleClick} {...restProps}>
      {children}
    </Button>
  );
};
Form.Button = FormButton;

const FormTag: React.FC<ClickProps> = ({ handleClick, children, ...restProps }) => {
  return (
    <Tag onClick={handleClick} {...restProps}>
      {children}
    </Tag>
  );
};
Form.Tag = FormTag;

const FormTagWrapper: React.FC = ({ children, ...restProps }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        if (ref.current !== null) {
          ref.current.scrollLeft += e.deltaY;
        }
      });
    }
  }, [ref]);

  return (
    <TagWrapper ref={ref} {...restProps}>
      {children}
    </TagWrapper>
  );
};
Form.TagWrapper = FormTagWrapper;

export default Form;
