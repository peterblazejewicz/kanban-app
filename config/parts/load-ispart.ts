import { Configuration, Condition } from 'webpack';
const loadIsparta: (
  include: Condition | Condition[],
) => Configuration = include => ({
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loaders: ['isparta'],
        include: include,
      },
    ],
  },
});

export default loadIsparta;
