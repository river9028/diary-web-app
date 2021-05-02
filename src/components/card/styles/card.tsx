import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 30px;
  box-sizing: border-box;
`;

export const Group = styled.div`
  width: 100%;

  @media (min-width: 800px) {
    &:first-of-type {
      margin-right: 30px;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-bottom: 1px solid grey;
  cursor: pointer;

  .left {
    flex: 4;
  }

  .right {
    flex: 0;

    @media (min-width: 800px) {
      flex: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 17px;
  line-height: 21px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 800px) {
    font-size: 24px;
    line-height: 34px;
    display: block;
    font-weight: normal;
  }
`;

export const Text = styled.p`
  display: -webkit-box;
  overflow: hidden;
  margin-top: 4px;
  font-size: 13px;
  vertical-align: top;
  word-break: break-all;
  -webkit-box-orient: vertical;
  color: #5c5c5c;

  font-size: 14px;
  line-height: 19px;
  -webkit-line-clamp: 2;

  @media (min-width: 800px) {
    line-height: 23px;
    -webkit-line-clamp: 4;
  }
`;

export const Img = styled.div`
  width: 150px;
  height: 150px;
  display: none;

  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Tag = styled.p`
  font-size: 13px;
  color: #6bacce;

  ::after {
    content: ' | ';
    color: #ebebeb;
  }

  ::before {
    content: ' ';
    white-space: pre;
  }

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :hover {
    font-weight: bold;
  }
`;

export const Date = styled.p`
  font-size: 13px;
  color: #a7a7a7;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
