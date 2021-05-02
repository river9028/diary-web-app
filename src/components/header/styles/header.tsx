import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  /* position: absolute; */

  max-width: 800px;
  width: calc(100vw - 60px);
  height: 60px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 9;
  font-size: 1.414rem;
  line-height: 1.4em;
  background: #fff;

  @media (min-width: 800px) {
    /* padding: 0; */
    font-size: 1.9994rem;
    line-height: 1.4em;
  }
`;

export const Group = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  border: 0;
  background: transparent;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease;
  &:focus {
    outline: 0;
  }

  &:first-of-type,
  &:last-of-type {
    position: unset;
    left: unset;
    transform: unset;

    :hover {
      transform: scale(1.1);
    }
  }
`;

export const Text = styled.p``;
