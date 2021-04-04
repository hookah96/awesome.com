import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const compContainer = css`
  margin-top: 5vw;
  // width: 100%;
  padding: 2.5vw var(--basic-lr-margin) 0 var(--basic-lr-margin);
  background: linear-gradient(180deg, #e9f3fa 3.33%, #9bd8d4 99.63%);
  & h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    letter-spacing: 0.15em;
    color: var(--primary-green);
  }
  ${mq[2]} {
    margin-top: 4vw;
    & h4 {
      font-size: 2.255rem;
    }
  }
  ${mq[1]} {
    margin-top: 10vw;
    padding-bottom: 1.75rem;
    & h4 {
      font-size: 2.3rem;
    }
  }
`;

export const infoCol = css`
  display: flex;
  flex-direction: column;
  ${mq[1]} {
    display: block;
    // position: relative;
    // margin-top: 10rem;
  }
`;

export const displayInfo = css`
  display: flex;
  align-items: center;
  padding-left: 1.25vw;
  & p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.5em;
    letter-spacing: 0.015em;
    color: var(--secondary-dark-green);
  }
  & img {
    width: 20%;
    margin-right: 2vw;
    min-height: 10%;
  }
  &:nth-child(2) {
    flex-direction: row-reverse;
    padding-left: 0vw;
    & img {
      margin-right: 2vw;
    }
  }
  &:nth-child(3) {
    & img {
      width: 25%;
      height: 10%;
    }
  }
  ${mq[2]} {
    & p {
      font-size: 0.85rem;
      line-height: 1.25em;
    }
    & img {
      width: 25%;
      min-height: 15%;
    }
    &:nth-child(3) {
      & img {
        width: 35%;
        height: 20%;
      }
    }
  }
  ${mq[1]} {
    display: block;
   margin-top: 2.2rem;
    & img {
      margin: 1rem;
      align-self: flex-start;
      // position: relative;
      width: 40%;
      float: left;
      bottom: 100px;
      shape-outside: circle(70%);
    }
    & p {
      line-height: 1.35rem;
      // position: absolute;
      // float: left;
    }
    &:nth-child(2) {
      
      & img {
        margin: 0 0 1rem 0;
        float: right; 
        shape-outside: circle(50%);
      }
    }
    &:nth-child(3) {
      margin-bottom: 2rem;
      & img {
        shape-outside: circle(50%);
        width: 35%;
        height: 15%;
      }
  }
`;
