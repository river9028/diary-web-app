import React, { Children, createContext, useContext, useEffect, useRef } from 'react';
import {
  Wrapper,
  Container,
  Title,
  TagWrapper,
  Tag,
  TagInput,
  Textarea,
  Image,
  Button,
  FileInput,
  FileWrapper,
  FileButton,
} from './styles/form';

type ClickProps = {
  handleClick: () => void;
};

type InputProps = {
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string;
};

type FormType = {
  Title: React.FC<InputProps>;
  TagInput: React.FC<InputProps & { handlePressEnter: () => void }>;
  Textarea: React.FC<InputProps>;
  Image: React.FC<{ src: string }>;
  Button: React.FC<ClickProps>;
  Tag: React.FC<ClickProps>;
  TagWrapper: React.FC;
  FileInput: React.FC<{ handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }>;
  FileWrapper: React.FC<{ hasAttachment: boolean }>;
  FileButton: React.FC<ClickProps>;
};

const FileInputContext = createContext<{
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
}>({
  fileInputRef: { current: null },
});

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

const FormFileWrapper: React.FC<{ hasAttachment: boolean }> = ({ hasAttachment, children, ...restProps }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <FileInputContext.Provider value={{ fileInputRef }}>
      <FileWrapper
        onClick={() => {
          if (!hasAttachment) {
            fileInputRef.current?.click();
          }
        }}
        {...restProps}
      >
        {children}
      </FileWrapper>
    </FileInputContext.Provider>
  );
};
Form.FileWrapper = FormFileWrapper;

const FormImage: React.FC<{ src: string }> = ({ src, children, ...restProps }) => {
  return (
    <Image src={src} {...restProps}>
      {children}
    </Image>
  );
};
Form.Image = FormImage;

const FormFileInput: React.FC<{ handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({
  handleChange,
  children,
  ...restProps
}) => {
  const { fileInputRef } = useContext(FileInputContext);

  return (
    <FileInput hidden ref={fileInputRef} type='file' accept='image/*' onChange={handleChange} {...restProps}>
      {children}
    </FileInput>
  );
};
Form.FileInput = FormFileInput;

const FormFileButton: React.FC<ClickProps> = ({ handleClick, children, ...restProps }) => {
  const { fileInputRef } = useContext(FileInputContext);
  return (
    <FileButton
      type='button'
      onClick={(e) => {
        e.stopPropagation();
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        handleClick();
      }}
      {...restProps}
    >
      {children}
    </FileButton>
  );
};
Form.FileButton = FormFileButton;

export default Form;
