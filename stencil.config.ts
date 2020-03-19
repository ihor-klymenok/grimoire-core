import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'grimoire',
  bundles: [
    { components: ['grm-button'] },
    { components: ['grm-input'] },
    { components: ['grm-checkbox'] },
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
