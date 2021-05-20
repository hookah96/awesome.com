import { css } from 'emotion';

export const filtersContainer = css`
  margin: 0.5rem var(--basic-lr-margin) 0 var(--basic-lr-margin);
  height: 70vh;
  position: relative;
  width: 18%;
  float: left;
  background: #c9e5f9;
  color: #363636;
  border-radius: 10px;
  & h4 {
    margin: 0.2rem 0 0 1rem;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 113.7%;
    letter-spacing: 0.075em;
  }

  & h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 113.7%;
    letter-spacing: 0.075em;
  }
`;

export const basicFilter = css`
  margin: 2rem 0 0 1rem;
  display: flex;
  flex-flow: column nowrap;
`;

export const elCat = css`
  display: flex;
  margin-top: 0.2rem;
`;
