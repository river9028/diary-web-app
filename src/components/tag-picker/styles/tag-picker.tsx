import styled, { css } from 'styled-components';

type PickerType = {
  showDatePicker: boolean;
  showTagPicker: boolean;
};

export const Wrapper = styled.div<PickerType>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  height: ${({ showTagPicker }) => (showTagPicker ? '60px' : '0px')};

  ${({ showTagPicker, showDatePicker }) =>
    showTagPicker &&
    showDatePicker &&
    css`
      height: 60px;
    `};
`;

export const Container = styled.div<PickerType>`
  width: calc(100vw - 60px);
  max-width: 800px;
  box-sizing: border-box;
  display: inline-box;
  align-items: center;

  font-size: 1.414rem;
  line-height: 1.4em;
  background: #fff;
  z-index: 1;
  user-select: none;
  position: absolute;
  top: 0;
  white-space: nowrap;
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  ${({ showTagPicker }) =>
    showTagPicker &&
    css`
      transform: translate(0, 60px);
      transition: all 0.5s ease;
      height: 60px;
    `};

  ${({ showTagPicker, showDatePicker }) =>
    showTagPicker &&
    showDatePicker &&
    css`
      transform: translate(0, 120px);
      transition: all 0.5s ease;
      height: 60px;
    `};

  .react-datepicker-wrapper {
    /* padding: 10px 10px; */
    flex: 1;
    font-size: 1rem;

    input {
      width: 100%;
      text-align: center;
      box-sizing: border-box;
    }
  }
`;

export const Tag = styled.div`
  width: auto;
  display: inline;
  font-size: 13px;
  line-height: 21px;
  padding: 5px;
  /* border: 1px solid black; */
  background-color: #6bacce;
  color: #fff;
  border-radius: 5px;
  transform: scale(1);

  &:hover {
    color: #6bacce;
    background-color: #fff;
    border: 1px solid #6bacce;
  }

  & + & {
    margin-left: 5px;
  }
`;
