import styled from 'styled-components';
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
  width: 100%;

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

export const TagInput = styled.input`
  /* width: 100%; */
  box-sizing: border-box;
  border: 0;
  outline: 0 none;
  padding: 0;

  /* padding-bottom: 20px; */
  @media (min-width: 800px) {
    /* padding-bottom: 30px; */
  }
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
    left: 50vw;
    transform: translate(-50%, 0);
  }
`;

export const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Tag = styled.div`
  display: inline;
  font-size: 13px;
  line-height: 21px;
  padding: 5px;
  /* border: 1px solid black; */
  background-color: #6bacce;
  color: #fff;
  border-radius: 5px;

  :last-of-type {
    margin-right: 5px;
  }

  &:hover {
    color: #6bacce;
    background-color: #fff;
    border: 1px solid #6bacce;
  }

  & + & {
    margin-left: 5px;
  }
`;

export const FileInput = styled.input``;

export const FileButton = styled.button`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  cursor: pointer;
  border: 0;
  padding: 30px;
  font-size: 30px;
  box-sizing: border-box;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  width: inherit;
  height: 100%;
`;

export const FileWrapper = styled.div`
  position: relative;
  margin: 20px 0;
  border: 5px solid #000000;
  width: 200px;
  padding-top: 200px;
  font-size: 30px;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :hover {
    ${Image} {
      opacity: 0.5;
    }

    ${FileButton} {
      opacity: 1;
      pointer-events: auto;
      z-index: 99;
    }
  }
`;
