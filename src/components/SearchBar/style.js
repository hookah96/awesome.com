import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const form_wrapper = css`
  display: block;
  background-color: #ffffff;
  width: 100%;
  height: 4vh;
  display: flex;
  border-radius: 20px;
  border: 2px solid var(--primary);
  overflow: hidden;
  box-shadow: 5px 5px 5px #e0e0e0;
  &:focus-within {
    border-color: #366bd4;
  }
  ${mq[1]} {
    width: 1.5vw;
    height: 2.1vh;
    box-shadow: none;
    padding: 0.2rem 0.5rem 0.2rem 0.2rem;
    transition: width 300ms ease-in-out;
    cursor: pointer;
    &:focus-within {
      width: 100%;
      box-shadow: 5px 5px 5px #e0e0e0;
    }
  }
  ${mq[0]} {
    width: 4.7vw;
    height: 2.8vh;
    justify-content: flex-end;
    &:focus-within {
      width: 100%;
      box-shadow: 3px 3px 3px #e0e0e0;
    }
  }
`;

export const input = css`
  position: relative;
  width: 95%;
  margin: 0;
  padding: 10px;
  align-self: stretch;
  border-style: hidden;
  background: transparent;
  &:focus {
    outline: none;
  }

  ${mq[2]} {
    width: 100%;
    font-size: 0.6rem;
  }
  ${mq[1]} {
    width: 85%;
    font-size: 0.65rem;
    padding: 1px;
    align-self: center;
    opacity: 0;
    cursor: pointer;

    &:focus-within {
      opacity: 1;
      cursor: initial;
    }
  }
  ${mq[0]} {
    width: 90%;
    font-size: 0.75rem;
    padding: 3px;
    align-self: center;
    opacity: 0;
    cursor: pointer;

    &:focus-within {
      opacity: 1;
      cursor: initial;
    }
  }
`;

export const searchBtn = css`
  margin-left: 10px;
  align-self: center;
  padding-right: 10px;
  color: steelblue;
  ${mq[2]} {
    font-size: 0.8rem;
  }
  ${mq[1]} {
    height: 100%;
    margin: 0.1rem 0rem 0.1rem 0rem;
    padding-right: 0.1rem;
    margin-left: auto;
  }
  ${mq[0]} {
    font-size: 0.65rem;
    padding-right: 0;
    margin-left: auto;
    margin-right: 0;
  }
`;
