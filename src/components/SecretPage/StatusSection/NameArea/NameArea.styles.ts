/* eslint-disable camelcase */
import { css } from '@emotion/react';

import { SECRET_SIZES } from '@/components/SecretPage/constants';
import { COLORS } from '@/styles/colors';

export const nameStyle = css({
  fontSize: SECRET_SIZES.SIZE_NAME,
  color: COLORS.WHITE,
  marginBottom: 5,
  filter: `drop-shadow(0 0 2px ${COLORS.BLACK})`,
});

export const subNameStyle = css({
  fontSize: SECRET_SIZES.SIZE_SUBNAME,
  color: COLORS.WHITE,
  fontWeight: 700,
  filter: `drop-shadow(0 0 2px ${COLORS.BLACK})`,
});
