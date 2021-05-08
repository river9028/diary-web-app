import React from 'react';
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/auth-form';

type BasePropsType = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

type SubmitPropsType = {
  disabled: boolean;
};

type LinkPropsType = {
  to: string;
};

type InputPropsType = {
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type AuthFormType = {
  Error: React.FC;
  Base: React.FC<BasePropsType>;
  Title: React.FC;
  Text: React.FC;
  TextSmall: React.FC;
  Link: React.FC<LinkPropsType>;
  Input: React.FC<InputPropsType>;
  Submit: React.FC<SubmitPropsType>;
};

const AuthForm: React.FC & AuthFormType = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const FormError: React.FC = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};
AuthForm.Error = FormError;

const FormBase: React.FC<BasePropsType> = ({ handleSubmit, children, ...restProps }) => {
  return (
    <Base onSubmit={handleSubmit} method='POST' {...restProps}>
      {children}
    </Base>
  );
};
AuthForm.Base = FormBase;

const FormTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
AuthForm.Title = FormTitle;

const FormText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
AuthForm.Text = FormText;

const FormTextSmall: React.FC = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};
AuthForm.TextSmall = FormTextSmall;

const FormLink: React.FC<LinkPropsType> = ({ to, children, ...restProps }) => {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};
AuthForm.Link = FormLink;

const FormInput: React.FC<InputPropsType> = ({
  handleChange,
  value,
  autoComplete,
  placeholder,
  type,
  children,
  ...restProps
}) => {
  return (
    <Input
      type={type ?? 'text'}
      placeholder={placeholder}
      autoComplete={autoComplete}
      value={value}
      onChange={handleChange}
      {...restProps}
    >
      {children}
    </Input>
  );
};
AuthForm.Input = FormInput;

const FormSubmit: React.FC<SubmitPropsType> = ({ disabled, children, ...restProps }) => {
  return (
    <Submit disabled={disabled} {...restProps}>
      {children}
    </Submit>
  );
};
AuthForm.Submit = FormSubmit;

export default AuthForm;
