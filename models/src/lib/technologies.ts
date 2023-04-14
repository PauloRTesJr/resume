export const technologies: {[key: string]: Technology} = {
  angular: {
    name: 'Angular',
    color: '#1565c0'
  },
  react: {
    name: 'React',
    color: '#149eca'
  },
  svelte: {
    name: 'Svelte',
    color: '#ff3e00'
  },
  nodejs: {
    name: 'Node.JS',
    color: '#026e00'
  },
  unitTest: {
    name: 'Unit Tests',
    color: '#eb3a34'
  },
  git: {
    name: 'Git',
    color: '#f14e32'
  },
  nx: {
    name: 'NX',
    color: '#0f172a'
  },
  wordpress: {
    name: 'Wordpress',
    color: '#23282d'
  },
  laravel: {
    name: 'Laravel',
    color: '#f9322c'
  },
  csharp: {
    name: 'C#',
    color: '#512bd4'
  },
  jquery: {
    name: 'jQuery',
    color: '#a85852'
  },
  angularjs: {
    name: 'AngularJS',
    color: '#514f82'
  },
  php: {
    name: 'PHP',
    color: '#312f69'
  },
  unity: {
    name: 'Unity 3D',
    color: '#1f1e1f'
  }
}

export type Technology = {
  name: string;
  color: string;
}