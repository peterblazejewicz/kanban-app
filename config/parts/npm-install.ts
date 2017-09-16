import { Configuration } from 'webpack';
import * as NpmInstallPlugin from 'npm-install-webpack-plugin';

const npmInstall: (
  {
    dev,
    peerDependencies,
    quiet,
    npm,
  }?: {
    dev?: boolean;
    peerDependencies?: boolean;
    quiet?: boolean;
    npm?: string;
  },
) => Configuration = (options = {}) => ({
  plugins: [new NpmInstallPlugin(options)],
});

export default npmInstall;
