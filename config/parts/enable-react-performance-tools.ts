import { Configuration } from 'webpack';
const resolve = require.resolve;

const enableReactPerformanceTools: () => Configuration = () => ({
  module: {
    loaders: [
      {
        test: resolve('react'),
        loader: 'expose?React',
      },
    ],
  },
});

export default enableReactPerformanceTools;
