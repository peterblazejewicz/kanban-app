import { Configuration } from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
const extractCSS: (paths: any[]) => Configuration = paths => ({
  module: {
    loaders: [
      // Extract CSS during build
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['style', 'css']),
        include: paths,
      },
    ],
  },
  plugins: [
    // Output extracted CSS to a file
    new ExtractTextPlugin('[name].[chunkhash].css'),
  ],
});

export default extractCSS;
