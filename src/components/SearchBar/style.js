import { css } from 'emotion';

export const wrapper = css`
  grid-column: col2;
  grid-row: row3;
`;

export const form_wrapper = css`
  background-color: #ffffff;
  display: flex;
  border-radius: 20px;
  border-style: solid;
  border-width: 3px;
  border-color: #afffff;
  &:focus-within {
    border-color: #45a4ff;
    box-shadow: 5px 5px 5px #e0e0e0;
  }
`;

export const input = css`
  width: 95%;
  margin: 0;
  padding: 10px;
  align-self: stretch;
  border-style: hidden;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
`;

export const searchBtn = css`
  margin-left: 10px;
  align-self: center;
  padding-right: 10px;
  color: steelblue;
`;
