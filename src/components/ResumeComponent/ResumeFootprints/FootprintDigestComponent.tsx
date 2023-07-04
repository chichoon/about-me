interface Props {
  footprintKey: string;
  digest: {
    description: string;
    link?: string[];
  }[];
}

export const FootprintDigestComponent = ({ footprintKey, digest }: Props) => {
  <ul className={}>
    {digest.map(({ description, link }, index) => (
      <li key={`${footprintKey}-${index}`}>
        <span>{description}</span>
      </li>
    ))}
  </ul>;
};
