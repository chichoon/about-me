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
      JavaScript: <SiJavascript width={15} height={15} color='#ffffff' />,
      TypeScript: <SiTypescript width={15} height={15} color='#ffffff' />,
      HTML5: <SiHtml5 width={15} height={15} color='#ffffff' />,
      CSS3: <SiCss3 width={15} height={15} color='#ffffff' />,
      Sass: <SiSass width={15} height={15} color='#ffffff' />,
      React: <SiReact width={15} height={15} color='#ffffff' />,
      'Next.js': <SiNextdotjs width={15} height={15} color='#ffffff' />,
      'Socket.io': <SiSocketdotio width={15} height={15} color='#ffffff' />,
      'React%20Query': <SiReactquery width={15} height={15} color='#ffffff' />,
      'Styled%20Components': <SiStyledcomponents width={15} height={15} color='#ffffff' />,
      ESLint: <SiEslint width={15} height={15} color='#ffffff' />,
      Prettier: <SiPrettier width={15} height={15} color='#ffffff' />,
    }[slug] || <div css={blankDivStyle} />
  );
};

const blankDivStyle = css({
  width: 15,
  height: 15,
  background: 'transparent',
});
