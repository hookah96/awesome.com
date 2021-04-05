import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import { mq } from '../../utils/cssUtils';
import { css } from 'emotion';

export const carouselImages = [
  {
    image: banner1,
    text: 'Stay in sync with new gadgets.',
    positioningText: css`
      transform: translate(-15%, -50%);
      position: absolute;
    `,
    positioningBtn: css`
      transform: translate(-40%, 100%);
      ${mq[3]} {
        width: 15%;
        margin-top: 0.7rem;
        & p {
          font-size: 1rem;
        }
      }
      ${mq[2]} {
        width: 14%;
        margin-top: 0.1rem;
        & p {
          font-size: 0.9rem;
        }
      }
      ${mq[1]} {
        transform: translate(-50%, 100%);
        width: 20%;
        margin-top: 0rem;
        & p {
          font-size: 0.8rem;
        }
      }
      ${mq[0]} {
        width: 30%;
        margin-top: -0.5rem;
        & p {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
        }
      }
    `,
  },
  {
    image: banner2,
    text: 'Find your new computer.',
    positioningText: css`
      transform: translate(25%, -50%);
      ${mq[0]} {
        transform: translate(30%, -50%);
        width: 55%;
      }
    `,
    positioningBtn: css`
      transform: translate(54%, 100%);
      ${mq[3]} {
        width: 15%;
        margin-top: 0.7rem;
        & p {
          font-size: 1rem;
        }
      }
      ${mq[2]} {
        width: 14%;
        margin-top: 0.1rem;
        & p {
          font-size: 0.9rem;
        }
      }
      ${mq[1]} {
        transform: translate(65%, 100%);
        width: 20%;
        margin-top: 0rem;
        & p {
          font-size: 0.8rem;
        }
      }
      ${mq[0]} {
        width: 30%;
        margin-top: -0.5rem;
        & p {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
        }
      }
    `,
  },
  {
    image: banner3,
    text: 'Make your place comfortable.',
    positioningText: css`
      transform: translate(-25%, -50%);
    `,
    positioningBtn: css`
      transform: translate(-60%, 100%);
      background: #85544c;
      ${mq[3]} {
        transform: translate(-70%, 100%);
        width: 15%;
        margin-top: 0.7rem;
        & p {
          font-size: 1rem;
        }
      }
      ${mq[2]} {
        transform: translate(-80%, 100%);
        width: 14%;
        margin-top: 0.1rem;
        & p {
          font-size: 0.9rem;
        }
      }
      ${mq[1]} {
        transform: translate(-90%, 100%);
        width: 20%;
        margin-top: 0rem;
        & p {
          font-size: 0.8rem;
        }
      }
      ${mq[0]} {
        width: 30%;
        margin-top: -0.5rem;
        & p {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
        }
      }
    `,
  },
];
