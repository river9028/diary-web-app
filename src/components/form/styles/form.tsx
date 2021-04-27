import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px 30px;
  box-sizing: border-box;
  margin-bottom: 64px;
`;

export const Container = styled.form`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;

export const Title = styled.div`
  box-sizing: border-box;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 24px;
  color: #202020;

  input {
    display: block;
    width: 100%;
    height: 42px;
    border: none;
    resize: none;
    outline: 0 none;
    line-height: 40px;
    overflow: hidden;
    letter-spacing: -0.4px;
    padding: 0;
  }

  @media (min-width: 800px) {
    padding-bottom: 30px;
    font-size: 30px;
  }
`;

export const Textarea = styled(TextareaAutosize)`
  width: 100%;
  box-sizing: border-box;
  border: 0;
  outline: 0 none;
  resize: none;
  overflow: hidden;

  padding: 20px 0;
  @media (min-width: 800px) {
    padding: 30px 0;
  }
`;

export const Tag = styled.input`
  /* width: 100%; */
  box-sizing: border-box;
  border: 0;
  outline: 0 none;
  padding: 0;

  padding-bottom: 20px;
  @media (min-width: 800px) {
    padding-bottom: 30px;
  }
`;

export const Image = styled.div<{ src: string }>`
  width: 100%;
  height: 200px;

  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  max-width: 800px;
  width: 100%;
  background: #000;
  color: #fff;

  position: fixed;
  bottom: 0;
  left: 0;
  @media (min-width: 800px) {
    /* position: unset;
    bottom: unset;
    left: unset; */
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
