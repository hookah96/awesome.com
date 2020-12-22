import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d2f6fc;
  border-radius: 20px;
  margin-top: 0.1em;
  ${mq[0]} {
    justify-content: space-evenly;
  }
  ${mq[1]} {
    width: 100%;
  }
`;

export const image = css`
  ${mq[0]} {
    width: 3rem;
    height: 3rem;
    margin-left: 10px;
  }
  ${mq[1]} {
    width: 25%;
    height: 25%;
    margin-left: 0.4em;
  }
`;

export const cart_img = css`
  position: relative;
  text-align: center;
  margin-right: 6em;
  font-size: 1.25em;
  ${mq[0]} {
    margin-right: 1em;
    font-size: 1em;
  }
  ${mq[1]} {
    margin-right: 1em;
  }
`;

export const cartItems = css`
  position: absolute;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 1rem;
  width: 1.25rem;
  height: 1.25rem;
  bottom: 1.2rem;
  left: 0.6rem;
  ${mq[0]} {
    width: 1rem;
    height: 1rem;
    font-size: 0.8rem;
  }
`;

export const searchBar = css`
  flex-grow: 0.75;
  ${mq[0]} {
    flex-basis: 30%;
  }
  ${mq[1]} {
    flex-basis: 30%;
    flex-shrink: 1;
  }
`;
