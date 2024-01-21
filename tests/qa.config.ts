import cypressDefaultConfig from './cypress.config';
import {defineConfig} from 'cypress';

const qaCypressConfig = defineConfig({
  video: false,
  numTestsKeptInMemory: 0,
  e2e: {
    ...cypressDefaultConfig.e2e,
  },
});

export default qaCypressConfig;
