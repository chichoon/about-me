import { css } from '@emotion/react';
import styled from '@emotion/styled';

// export const starWrapper = css({
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',

//   svg: {
//     width: 20,
//     height: 20,
//     transform: 'rotate(15deg)',
//     ':not(:first-child)': {
//       marginLeft: -8,
//     },
//   },
// });

export const starWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  fill: ${({ theme }) => theme.color.$WHITE};
`;
