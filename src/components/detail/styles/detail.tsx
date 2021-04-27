import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px 30px;
  box-sizing: border-box;
  margin-bottom: 64px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 350px) {
    display: block;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding-bottom: 10px;
  white-space: nowrap;
`;

export const Date = styled.p``;

export const Text = styled.pre`
  font-family: 'Noto Sans KR', sans-serif;
  line-height: normal;
  white-space: pre-wrap;
`;

export const TagGroup = styled.div`
  display: flex;
`;

export const Tag = styled.p`
  margin-left: 10px;

  &:first-of-type {
    margin-left: 0px;
  }
  ::before {
    content: '#';
  }
`;

export const Image = styled.div``;

export const Button = styled.button`
  border: 0;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  white-space: nowrap;

  width: 1em;
  font-size: 1em;

  @media (min-width: 800px) {
    width: 1.5em;
    font-size: 1.5em;
  }

  & + & {
    margin-left: 20px;
  }

  :hover {
    transform: scale(1.1);
  }
`;
