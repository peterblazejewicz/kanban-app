import * as webpack from 'webpack';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';
const clean: (path: string) => webpack.Configuration = path => ({
  plugins: [
    new CleanWebpackPlugin([path], {
      root: process.cwd(),
    }),
  ],
});

export default clean;
