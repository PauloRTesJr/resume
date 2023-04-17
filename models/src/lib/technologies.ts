export const technologies: {[key: string]: Technology} = {
  angular: {
    name: 'Angular',
    color: '#1565c0',
    score: 5
  },
  react: {
    name: 'React',
    color: '#149eca',
    score: 5,
  },
  svelte: {
    name: 'Svelte',
    color: '#ff3e00',
    score: 4,
  },
  nodejs: {
    name: 'Node.JS',
    color: '#026e00',
    score: 4
  },
  unitTest: {
    name: 'Unit Tests',
    color: '#eb3a34',
    score: 5
  },
  git: {
    name: 'Git',
    color: '#f14e32',
    score: 5
  },
  nx: {
    name: 'NX',
    color: '#0f172a',
    score: 4
  },
  wordpress: {
    name: 'Wordpress',
    color: '#23282d',
    score: 3
  },
  laravel: {
    name: 'Laravel',
    color: '#f9322c',
    score: 1
  },
  csharp: {
    name: 'C#',
    color: '#512bd4',
    score: 3
  },
  jquery: {
    name: 'jQuery',
    color: '#a85852',
    score: 4
  },
  angularjs: {
    name: 'AngularJS',
    color: '#514f82',
    score: 3
  },
  php: {
    name: 'PHP',
    color: '#312f69',
    score: 1
  },
  unity: {
    name: 'Unity 3D',
    color: '#1f1e1f',
    score: 1
  }
}

export type Technology = {
  name: string;
  color: string;
  score: number;
}