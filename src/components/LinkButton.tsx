import Link from 'next/link';
import { Interpolation, Theme, css } from '@emotion/react';

import { COLORS } from '@/styles/colors';

interface Props {
  children: JSX.Element;
  href: string;
  cssStyle?: Interpolation<Theme>;
}

export const LinkButton = ({ children, href, cssStyle }: Props) => {
  return (
    <Link href={href} css={[linkStyle, cssStyle]}>
      {children}
    </Link>
  );
};

const linkStyle = css({
  border: `1px solid ${COLORS.GRAYA}`,
  width: 'fit-content',
  padding: '10px 15px',
  borderRadius: 5,
  transition: 'background-color 0.2s ease-in',

  ':hover': {
    backgroundColor: COLORS.GRAYE,
  },
});
