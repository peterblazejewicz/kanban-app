import { Configuration, Condition } from 'webpack';
const lintJSX: (
  include: Condition | Condition[],
) => Configuration = include => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint'],
        include: include,
        enforce: 'pre',
      },
    ],
  },
});
export default lintJSX;
