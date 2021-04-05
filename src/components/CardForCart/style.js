import { css } from 'emotion';

export const outterDisplay = css`
  background: white;
  border-radius: 5px 0 0 5px;
  padding: 10px;
`;

export const innerDisplay = css`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background: #d3fcff;
  padding: 1vw;
`;

export const cartProdImage = css`
  background: white;
  width: 100px;
  height: 100px;
`;

export const name_photo = css`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  & h2 {
    font-weight: 400;
    margin-left: 2rem;
  }
`;

export const priceFont = css`
  & h3 {
    margin-top: 2rem;
    font-weight: 400;
  }
`;

export const cartActions = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;
`;

export const trashIcon = css`
  color: #909090;
  cursor: pointer;
`;

//Dropdown CSS Rules

export const border = css`
  position: relative;
  display: flex;
  width: 20%;
  height: 27%;
  align-items: baseline;
  justify-content: space-around;
  border: 1px solid #909090;
  border-radius: 8px;
  color: #909090;
`;

export const dropdown = css`
  align-self: flex-start;
  flex-flow: column nowrap;
  padding: 2px;
  position: absolute;
  margin-top: 1.5rem;
  width: 2rem;
  border: 0.5px solid black;
  border-radius: 8px;
  background: whitesmoke;
  z-index: 5;
`;

export const dropdownList = css`
  display: flex;
  justify-content: center;
  &:hover {
    border-radius: 3px;
    width: 100%;
    background: #909090;
    color: white;
  }
`;
