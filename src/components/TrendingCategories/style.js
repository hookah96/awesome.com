import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const container = css`
  margin-top: 5vw;
  & p {
    font-weight: normal;
    font-size: 20px;
    line-height: 113.7%;
    letter-spacing: 0.05em;
    color: #000000;
    text-decoration: underline;
    text-decoration-color: #3694d4;
  }
  ${mq[2]} {
    & p {
      font-size: 1.05rem;
    }
  }
  ${mq[1]} {
    margin-top: 6vw;
    & p {
      font-size: 1.03rem;
    }
  }
`;

export const trendCat = css`
  margin-top: 3vw;
  margin-left: 3.5vw;
  ${mq[1]} {
    margin-top: 7vw;
    margin-left: 1vw;
  }
`;

export const flexCategories = css`
  display: flex;
  justify-content: space-between;
`;

export const catIcons = css`
  width: 65%;
  min-height: 65%;
  margin-bottom: 2.5rem;
  cursor: pointer;
  align-self: center;

  ${mq[2]} {
    width: 60%;
    margin-bottom: 0.5rem;
  }
  ${mq[1]} {
    margin-bottom: 1rem;
    width: 60%;
  }
`;

export const catContainer = css`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

export const catTitle = css`
  width: 60%;
  align-self: center;
  padding: 0.5rem;
  background: var(--secondaryDB);
  border-radius: 100px;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  box-shadow: 4px 4px 4px rgba(48, 83, 130, 0.5);
  cursor: pointer;
  margin-top: 1rem;
  ${mq[2]} {
    font-size: 1.05rem;
  }
  ${mq[1]} {
    margin: 0 0.6rem 0 0.6rem;
    box-shadow: 3px 3px 3px rgba(48, 83, 130, 0.5);
    width: 80%;

    font-size: 0.9rem;
  }
`;
