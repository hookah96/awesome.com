import { css } from 'emotion';

export const container = css`
  display: grid;
  grid-template-columns: [col1] 1fr [col2] 2fr [col3] 1fr;
  grid-template-rows: [row1] 1fr [row2] 1fr [row3] auto [row3-end] 3fr;
`;

export const logo1 = css`
  grid-column: col2;
  grid-row: row2;
  place-self: end center;
`;

export const infoBtn = css`
  grid-column: col3;
  grid-row: row3;
  display: inline;
  color: #0068d1;
  place-self: center start;
  margin-left: 10px;
  // height: 600px;
  width: 600px;
`;
