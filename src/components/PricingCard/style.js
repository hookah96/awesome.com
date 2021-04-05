import { css } from 'emotion';

export const container = css`
  background: white;
  padding: 0.6em;
  border-radius: 0 5px 5px 0;
`;

export const pricingBox = css`
  border-radius: 5px;
  background: #d3fcff;
  padding: 0.2vw 2vw 1vw 2vw;
  & h3 {
    font-weight: 600;
  }
`;

export const bottomLine = css`
  border-bottom: 1px solid grey;
  margin: 1vw 1vw 1vw 1vw;
`;

export const placingItems = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const totalAndBtn = css`
  display: flex;
  flex-flow: column nowrap;
`;

export const checkoutBtn = css`
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 10px;
  margin-top: 1rem;
  cursor: pointer;
  background: #4173a0;
  color: white;
  border-radius: 5px;
  text-align: center;
  align-self: center;
`;
export const totalPrice = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const rightArrow = css`
  align-self: center;
  padding-left: 1.1em;
`;

export const activeBtn = css`
  color: white;
`;
