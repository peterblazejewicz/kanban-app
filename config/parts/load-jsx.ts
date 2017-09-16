import { Condition, Configuration } from 'webpack';
const loadJSX: (
  include: Condition | Condition[],
) => Configuration = include => ({
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        // Enable caching for extra performance
        loaders: ['babel?cacheDirectory'],
        include: include,
      },
    ],
  },
});
export default loadJSX;
