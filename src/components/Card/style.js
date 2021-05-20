import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const cardContainer = css`
  width: 15%;
  max-height: 100%;
  margin: 0.5rem;
  padding: 1.8rem;
  background: white;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  border-radius: 10px;
`;

export const fitDivHeight = css`
  height: 30vh;
  max-height: 90%;
  align-self: center;
  display: block;
  width: 100%;
`;

export const prodPhoto = css`
  max-width: 100%;
  max-height: 100%;
  display: block;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
`;

export const fitDivWidth = css`
  width: 100%;
  max-height: 90%;
  align-self: center;
  display: block;
`;

export const prodTitle = css`
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 113.7%;
  margin: 1rem 0 0rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const prodDesc = css`
  font-style: normal;
  font-weight: normal;
  font-size: 0.8rem;
  color: #707070;
  line-height: 113.7%;
  margin: 0.3rem 0 0.7rem 0;
  & p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const noDesc = css`
  margin: 0.7rem 0 0.7rem 0;
`;

export const prodRating = css`
  display: flex;
  color: #f68b24;
  font-size: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const prodPrice = css`
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 113.7%;
`;
