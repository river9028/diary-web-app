import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ showDatePicker: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  height: ${({ showDatePicker }) => (showDatePicker ? '60px' : '0px')};
`;

export const Container = styled.div<{ showDatePicker: boolean }>`
  width: calc(100vw - 60px);
  max-width: 800px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  font-size: 1.414rem;
  line-height: 1.4em;
  background: #fff;
  z-index: 1;
  user-select: none;
  position: absolute;
  top: 0;

  ${({ showDatePicker }) =>
    showDatePicker &&
    css`
      transform: translate(0, 60px);
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
