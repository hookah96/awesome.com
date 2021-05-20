import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const footContainer = css`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  margin-top: 5vw;
  padding: 3vw var(--basic-lr-margin) 2vw var(--basic-lr-margin);
  background: var(--secondary-light-blue);
`;

export const nav = css`
  cursor: pointer;
  color: #ffffff;
`;

export const siteMap = css`
  width: 50%;
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #ffffff;
  text-transform: uppercase;
  ${mq[2]} {
    font-size: 1.05rem;
  }
  ${mq[1]} {
    width: 100%;
    font-size: 1rem;
  }
  ${mq[0]} {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const infoContainer = css`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const infoDetails = css`
  display: flex;
`;

export const infoIcons = css`
  font-size: 18px;
  margin: 0.1rem 0.5rem 0.2rem 0.2rem;
  ${mq[2]} {
    font-size: 1rem;
  }
  ${mq[1]} {
    font-size: 0.8rem;
  }
  ${mq[0]} {
    font-size: 0.7rem;
  }
`;

export const paymentIcons = css`
  width: 3rem;
  margin-right: 0.25rem;
  margin-top: 0.5rem;
  ${mq[2]} {
    width: 2.5rem;
  }
  ${mq[1]} {
    width: 2.2rem;
  }
  ${mq[0]} {
    width: 1.9rem;
  }
`;

export const socialNetworks = css`
  width: 20%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
`;

export const socialMap = css`
  display: flex;
  justify-content: flex-end;
  & a {
  }
  ${mq[0]} {
    justify-content: flex-start;
  }
`;

export const socialIcons = css`
  width: 3rem;
  margin-right: 0.25rem;
  cursor: pointer;
  ${mq[2]} {
    width: 2.5rem;
  }
  ${mq[1]} {
    width: 2.2rem;
  }
  ${mq[0]} {
    margin-top: 0.4rem;
    width: 1.9rem;
  }
`;

export const text = css`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #000000;
  ${mq[2]} {
    font-size: 0.8rem;
    letter-spacing: 0.07em;
  }
  ${mq[0]} {
    font-size: 0.6rem;
    letter-spacing: 0.05em;
  }
`;

export const credits = css`
  align-self: flex-end;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: #63a2dd;
  ${mq[0]} {
    font-size: 9px;
  }
`;
