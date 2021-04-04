import { css } from 'emotion';

export const sideNavContainer = css`
  z-index: 10;
  width: 50%;
  min-height: 100%;
  position: absolute;
  display: block;
  background: var(--primary);
  right: -100%;
  transition: right 500ms cubic-bezier(0, 0, 0.6, 0.71);
  margin-top: 0.5rem;
  border-radius: 4px 0 0 0;
`;

export const openSideNav = css`
  right: 0%;
  transition: right 500ms cubic-bezier(0, 0, 0.6, 0.71);
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
`;

export const options = css`
  width: auto;
  padding: 1rem;
  border-bottom: 1px solid white;
  text-align: center;
  cursor: pointer;
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
`;
