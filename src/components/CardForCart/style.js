import { css } from 'emotion';

export const innerDisplay = css`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

export const cartProdImage = css`
  width: 100px;
  height: 100px;
`;

export const name_photo = css`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  background: red;
  & h2 {
    margin-left: 2rem;
  }
`;

export const cartActions = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 25%;
  //   height: 100%;
  background: green;
`;
