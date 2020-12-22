import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const card = css`
  background-color: #ace5ff;
  padding: 0.8rem 1.5rem 1.25rem 1.5rem;
  border-radius: 9px;
  ${mq[0]} {
    padding: 0.5rem 0.8rem 0.8rem 0.8rem;
  }
  ${mq[1]} {
    padding: 0.5rem 0.8rem 0.8rem 0.8rem;
  }
`;

export const image = css`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  ${mq[0]} {
    padding-bottom: 0.5rem;
  }
`;

export const product_image = css`
  width: 250px;
  height: 250px;
  border-radius: 9px;
  ${mq[0]} {
    width: 130px;
    height: 100px;
  }
  ${mq[1]} {
    width: 150px;
    height: 140px;
  }
`;

export const cardContent = css`
  background-color: #d3fcff;
  padding: 0 0.8em 0.7em 0.8em;
  border-radius: 9px;
  ${mq[0]} {
    padding: 0 0.5em 0 0.5em;
  }
  ${mq[1]} {
    padding: 0 0.5em 0 0.5em;
  }
`;

export const cardDetails = css`
  display: flex;
  flex-direction: column;
`;

export const name1 = css`
  display: flex;
  justify-content: space-between;
  ${mq[0]} {
    width: 100%;
    font-size: 0.85em;
  }
  ${mq[1]} {
    width: 100%;
    font-size: 0.85em;
  }
`;

export const product_desc = css`
  display: inline-block;
  height: 100px;
  width: 100%;
  margin-bottom: 1em;
  color: #909090;
`;

export const action = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const action_cart = css`
  font-size: 1.2rem;
  cursor: pointer;
  ${mq[0]} {
    font-size: 1em;
  }
  ${mq[1]} {
    font-size: 1em;
  }
`;
