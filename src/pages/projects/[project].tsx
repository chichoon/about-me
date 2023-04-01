import { useRouter } from 'next/router';

const Project = () => {
  const router = useRouter();
  const { project } = router.query;

  return <p>{project}</p>;
};

export default Project;
