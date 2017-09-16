import { Configuration } from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexTemplate: (options: any) => Configuration = options => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      title: options.title,
      appMountId: options.appMountId,
      inject: false,
    }),
  ],
});

export default indexTemplate;
