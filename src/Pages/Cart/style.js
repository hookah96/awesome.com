import { css } from 'emotion';

export const cartContainer = css`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
`;

export const cardWrapper = css`
  width: 50%;
  margin-left: 2vw;
`;

export const totalBox = css`
  display: flex;
  flex-flow: column nowrap;
  height: 50%;
  width: 40%;
  margin: 4.5em 6.8rem 0 0;
`;

export const placingRtnBtn = css`
  width: 47%;
  align-self: center;
  margin-top: 1rem;
`;

export const rtnToHomepage = css`
  display: flex;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  background: #4173a0;
  color: white;
  border-radius: 5px;
  text-align: center;
`;

export const leftArrow = css`
  align-self: center;
  padding-right: 1em;
`;

export const activeBtn = css`
  color: white;
`;
