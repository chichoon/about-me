import { css } from '@emotion/react';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiReact,
  SiNextdotjs,
  SiSocketdotio,
  SiReactquery,
  SiStyledcomponents,
  SiEslint,
  SiPrettier,
} from '@icons-pack/react-simple-icons';

interface Props {
  slug?: string;
}

export const SimpleIcon = ({ slug }: Props): JSX.Element => {
  if (!slug) return <div css={blankDivStyle} />;
  return (
    {
      JavaScript: <SiJavascript width={15} height={15} />,
      TypeScript: <SiTypescript width={15} height={15} />,
      HTML5: <SiHtml5 width={15} height={15} />,
      CSS3: <SiCss3 width={15} height={15} />,
      Sass: <SiSass width={15} height={15} />,
      React: <SiReact width={15} height={15} />,
      'Next.js': <SiNextdotjs width={15} height={15} />,
      'Socket.io': <SiSocketdotio width={15} height={15} />,
      'React%20Query': <SiReactquery width={15} height={15} />,
      'Styled%20Components': <SiStyledcomponents width={15} height={15} />,
      ESLint: <SiEslint width={15} height={15} />,
      Prettier: <SiPrettier width={15} height={15} />,
    }[slug] || <div css={blankDivStyle} />
  );
};

const blankDivStyle = css({
  width: 15,
  height: 15,
  background: 'transparent',
});
