import { atom } from 'recoil';

import { IMyInfo } from 'types/myInfo';

const myInfoState = atom<IMyInfo>({
  key: '#myInfoState',
  default: {
    name: 'undefined',
    nameEng: 'undefined',
    email: 'undefined',
    github: 'undefined',
    blog: 'undefined',
    bio: {
      title: 'undefined',
      text: [],
    },
    stacks: {
      title: 'undefined',
      skills: {
        frontend: [],
        tools: [],
      },
    },
    projects: [],
    experiences: [],
  },
});

export default myInfoState;
