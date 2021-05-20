import { css } from 'emotion';
import { mq } from '../../utils/cssUtils';

export const sideNavContainer = css`
  z-index: 10;
  width: 30%;
  min-height: 100%;
  position: absolute;
  display: block;
  background: var(--primary);
  right: 0%;
  transition: width 500ms ease-in;
  margin-top: 0.5rem;
  border-radius: 4px 0 0 0;
`;

export const inactiveSideNav = css`
  z-index: 10;
  width: 0%;
  min-height: 100%;
  position: absolute;
  display: block;
  background: var(--primary);
  right: -10%;
  transition: width 500ms ease-out;
  margin-top: 0.5rem;
  border-radius: 4px 0 0 0;
`;

export const link = css`
  color: white;

  &:active {
    color: white;
  }
`;

export const sideNavOptions = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  color: white;
  font-weight: normal;
  font-size: 1rem;
  line-height: 100%;
  letter-spacing: 0.2em;
  text-transform: lowercase;
  cursor: pointer;
  ${mq[0]} {
    font-size: 0.8rem;
  }
`;
export const inactiveSideNavOptions = css`
  display: none;
`;

export const options = css`
  width: auto;
  padding: 1rem;
  border-bottom: 1px solid white;
  text-align: center;
  cursor: pointer;
  color: white;
  &:first-child {
    & svg {
      padding-left: 0.5rem;
    }
  }
`;

export const openOptionsBorderTop = css`
  border-top: 1px solid white;
`;

export const subnavContainer = css`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 1rem;
`;

export const subNav = css`
  padding: 0.5rem;
  &:hover {
    font-size: 1.2rem;
    border-bottom: 1.8px solid white;
  }
  ${mq[0]} {
    &:hover {
      font-size: 0.9rem;
    }
  }
`;
