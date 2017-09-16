import { Configuration, Condition } from 'webpack';

const setupCSS: (paths: Condition | Condition[]) => Configuration = paths => ({
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: paths,
      },
    ],
  },
});

export default setupCSS;
