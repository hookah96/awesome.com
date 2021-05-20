import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const trendCatContainer = css`
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
  ${mq[0]} {
    margin-top: 6vw;
    & p {
      font-size: 1rem;
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
  ${mq[0]} {
    margin-top: 10vw;
    margin-left: 0vw;
  }
`;

export const flexCategories = css`
  display: flex;
  justify-content: space-between;

  ${mq[0]} {
    flex-flow: row wrap;
  }
`;

export const catContainer = css`
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  color: whitesmoke;
  ${mq[0]} {
    width: 50%;
    margin-bottom: 3rem;
  }
`;

export const catIconsCont = css`
  width: 60%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
  ${mq[2]} {
    width: 80%;
    margin-bottom: 0rem;
    a:last-child & {
      width: 50%;
    }
  }
  ${mq[1]} {
    width: 90%;
    margin-bottom: 0rem;
    a:last-child & {
      width: 65%;
    }
  }
  ${mq[0]} {
    width: 98%;
    margin-bottom: 0rem;
    a:last-child & {
      width: 65%;
    }
  }
`;

export const catIcons = css`
  width: 100%;
  height: 25vh;
  cursor: pointer;

  ${mq[2]} {
    width: 60%;
  }
  ${mq[1]} {
    margin-bottom: 1rem;
    width: 60%;
  }
  ${mq[0]} {
    width: 50%;
    margin-bottom: 0rem;
  }
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
  ${mq[0]} {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;
