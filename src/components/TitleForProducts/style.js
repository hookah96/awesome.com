import { css } from 'emotion';

export const titleContainer = css`
  width: 68%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  position: relative;
`;

export const nameSortCont = css`
  margin-left: 0.5rem;
  width: 40%;
`;

export const title = css`
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 113.7%;
  letter-spacing: 0.1em;
  color: #000000;
`;

export const btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  min-height: 4vh;
  margin-top: 1rem;
  background: var(--main-bg-color);
  border: 1px solid #3694d4;
  border-radius: 5px;
  & svg {
    margin: 0 0 0.3rem 0.5rem;
  }
`;

export const sortName = css`
  font-size: 0.8rem;
`;

export const ddContainer = css`
  position: absolute;
  background: var(--main-bg-color);
  width: 15%;
  border: 1px solid #3694d4;
  border-radius: 5px;
`;

export const ddElement = css`
  margin: 0.5rem 0 0 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  &:last-child {
    margin-bottom: 1rem;
  }
`;

export const paginationContainer = css`
  display: flex;
  align-self: flex-end;

  & span {
    display: flex;
    justify-content: space-around;
  }
`;

export const paginationBtn = css`
  border: none;
  background: var(--main-bg-color);
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const pageNumber = css`
  margin: 0 0.5rem 0.1rem 0.5rem;
  cursor: pointer;
  border: none;
  background: transparent;
  color: black;
  font-size: 1rem;
`;

export const activePageNum = css`
  font-weight: 700;
`;
