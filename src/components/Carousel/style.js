import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const slider = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  user-select: none;
  ${mq[1]} {
    margin-top: 5vw;
    margin-bottom: 5vw;
  }
  ${mq[0]} {
    margin-top: 5vw;
    margin-bottom: 5vw;
  }
`;

export const txt = css`
  position: absolute;
  width: 40%;
  color: whitesmoke;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  letter-spacing: 0.05em;
  ${mq[3]} {
    font-size: 2.25rem;
  }
  ${mq[2]} {
    font-size: 1.7rem;
  }
  ${mq[1]} {
    width: 50%;
    font-size: 1.6rem;
  }
  ${mq[0]} {
    width: 55%;
    font-size: 1rem;
    text-align: left;
    margin: 2rem 2rem 5rem -3rem;
  }
`;

export const bannerBtn = css`
  position: absolute;
  width: 18%;
  margin-top: 1.5rem;
  border-color: transparent;
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(48, 83, 130, 0.85);
  background: var(--secondaryDB);
  cursor: pointer;
  & p {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.15em;
    color: #ffffff;
  }
  ${mq[1]} {
    border-radius: 15px;
  }
  ${mq[0]} {
  }
`;

export const picture = css`
  width: 60%;
  border-radius: 30px;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.099);
  ${mq[2]} {
    width: 65%;
  }
  ${mq[1]} {
    width: 90%;
  }
  ${mq[0]} {
    width: 100%;
  }
`;

export const btnL = css`
  transform: translateX(150%);
  ${mq[2]} {
    transform: translateX(130%);
  }
  ${mq[1]} {
    transform: translateX(120%);
  }
  ${mq[0]} {
    transform: translateX(110%);
  }
`;

export const btnR = css`
  transform: translateX(-150%);
  ${mq[2]} {
    transform: translateX(-130%);
  }
  ${mq[1]} {
    transform: translateX(-120%);
  }
  ${mq[0]} {
    transform: translateX(-110%);
  }
`;

export const btn = css`
  position: relative;
  font-size: 2rem;
  color: whitesmoke;
  cursor: pointer;
  ${mq[3]} {
    font-size: 1.85rem;
  }
  ${mq[2]} {
    font-size: 1.75rem;
  }
  ${mq[1]} {
    font-size: 1.5rem;
  }
  ${mq[0]} {
    font-size: 1.2rem;
  }
`;
