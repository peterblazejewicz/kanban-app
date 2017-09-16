import * as webpack from 'webpack';
import * as NpmInstallPlugin from 'npm-install-webpack-plugin';

const npmInstall: (options?: any) => webpack.Configuration = (
  options: any = {},
) => ({ plugins: [new NpmInstallPlugin(options)] });

export default npmInstall;
