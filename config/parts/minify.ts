import { Configuration, optimize } from 'webpack';

const minify: () => Configuration = () => ({
  plugins: [
    new optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});

export default minify;
