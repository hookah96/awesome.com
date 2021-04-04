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
`;

export const credits = css`
  align-self: flex-end;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: #63a2dd;
`;
