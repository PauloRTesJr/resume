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
  }
}

export enum Technologies {
  Angular = 'angular',
  React = 'react',
  Svelte = 'svelte',
  NodeJS = 'nodejs'
}

export type Technology = {
  name: string;
  color: string;
}