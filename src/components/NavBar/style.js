import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const NavBarContainer = css`
  margin: 1vw var(--basic-lr-margin) 0 var(--basic-lr-margin); /* 1vw 5vw 0 5vw; */
  display: flex;
  ${mq[1]} {
    width: 90%;
    justify-content: space-between;
  }
  ${mq[0]} {
    width: 100%;
  }
`;

export const logo = css`
  margin-right: 2vw;
  padding-top: 0.1vw;
  color: var(--primary);
  font-weight: bold;
  font-size: 36px;
  line-height: 79.7%;
  letter-spacing: 0.1em;
  text-transform: lowercase;
  ${mq[3]} {
    margin-right: 1.25rem;
  }
  ${mq[2]} {
    margin-right: 1rem;
    font-size: 1.9rem;
  }
  ${mq[1]} {
    font-size: 1.8rem;
  }
  ${mq[0]} {
    line-height: 100%;
    font-size: 1.5rem;
  }
`;

export const navMenu = css`
  width: 35%;
  display: flex;
  align-items: center;
  ${mq[3]} {
    width: 40%;
  }
  ${mq[2]} {
    width: 40%;
  }
`;

export const navOptions = css`
  margin-right: 2rem;
  font-weight: normal;
  font-size: 18px;
  line-height: 50%;
  letter-spacing: 0.1em;
  text-transform: lowercase;
  cursor: pointer;
  ${mq[3]} {
    margin-right: 1.25rem;
    font-size: 1rem;
  }
  ${mq[2]} {
    margin-right: 1em;
    font-size: 0.82rem;
  }
`;

export const headerActions = css`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mq[1]} {
    width: 100%;
  }
  ${mq[0]} {
    width: 50%;
  }
`;

export const searchBarPositioning = css`
  ${mq[1]} {
    width: 100%;
  }
  ${mq[0]} {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

export const searchbarWidth = css`
  width: 70%;
  ${mq[2]} {
    width: 70%;
  }
  ${mq[1]} {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    position: relative;
  }
  ${mq[0]} {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

export const basketIcon = css`
  font-size: 1.5rem;
  margin-left: 1rem;
  color: var(--primary);
  ${mq[3]} {
    font-size: 1.25rem;
    margin-left: 1rem;
  }
  ${mq[2]} {
    font-size: 1.1rem;
    margin-left: 0.6rem;
  }
  ${mq[1]} {
    font-size: 1rem;
    &:nth-child(2) {
      margin-left: 0.65rem;
    }
  }
  ${mq[0]} {
    font-size: 0.95rem;
    margin-left: 0.4rem;
    &:nth-child(3) {
      font-size: 1.1rem;
    }
  }
`;

export const dropdownContainer = css`
  margin-top: 0.5rem;
  position: absolute;
  display: flex;
  z-index: 3;
  width: 9%;
  background: #d6e8f9;
  border: 1px solid #429ff5;
  box-sizing: border-box;
  border-radius: 5px;
  ${mq[3]} {
    width: 11%;
  }
  ${mq[2]} {
    width: 11.5%;
  }
`;

export const ddPositioning = css`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
`;

export const ddelement = css`
  width: 82%;
  padding: 0.8vw 0.8vw 0.8vw 0.8vw;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 0.05em;
  color: black;
  &:first-child {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #429ff5;
  }
  &:last-child {
    padding: 1.1vw 1.1vw 1.1vw 1vw;
  }
  ${mq[3]} {
    width: 87%;
  }
  ${mq[2]} {
    width: 87.5%;
    font-size: 0.8rem;
    letter-spacing: 0.04rem;
  }
`;

export const ddIcon = css`
  margin-left: 0.5vw;
`;

export const active = css`
  color: black;
`;

export const ddContainerCat = css`
  margin-left: 7.5rem;
  position: absolute;
  background: #d6e8f9;
  border: 1px solid #429ff5;
  box-sizing: border-box;
  border-radius: 5px;
  ${mq[3]} {
    margin-left: 7rem;
  }
  ${mq[2]} {
    margin-left: 5.5rem;
  }
`;

export const cat = css`
  font-size: 1rem;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #429ff5;
  cursor: pointer;
  padding: 0.8vw;
  &:last-child {
    border-bottom: none;
  }
  ${mq[3]} {
    width: 87%;
  }
  ${mq[2]} {
    font-size: 0.8rem;
    letter-spacing: 0.04rem;
  }
`;
