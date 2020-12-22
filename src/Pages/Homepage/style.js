import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const container = css`
  background-color: #f0ffff;
`;

export const gridCards = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const positionCard = css`
  margin: 1rem;
  width: 20%;
  ${mq[0]} {
    width: 45%;
    margin: 0.5rem;
  }
  ${mq[1]} {
    width: 25%;
  }
`;
