import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 800px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 25px;
  font-weight: normal;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReachRouterLink)`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  /* background: #333; */
  /* border-radius: 4px; */
  border: 0;
  border-bottom: 1px solid #333;
  color: #000;
  height: 50px;
  line-height: 50px;
  padding: 5px 0;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }

  :focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  background: #1baa3a;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;
