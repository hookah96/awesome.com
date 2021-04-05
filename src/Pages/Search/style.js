import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const container = css`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
`;

export const searchBar = css`
  width: 50%;
  margin: 1rem auto 1.5rem auto;
  ${mq[0]} {
    width: 87%;
    margin: 1rem auto 1rem auto;
  }
  ${mq[1]} {
    width: 70%;
    margin: 1rem auto 1rem auto;
  }
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
