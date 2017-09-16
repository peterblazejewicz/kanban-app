import * as webpack from 'webpack';

const extractBundle: (options: any) => webpack.Configuration = options => {
  const entry: { [id: string]: any } = {};
  entry[options.name] = options.entries;
  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest'],

        // options.name modules only
        minChunks: Infinity,
      }),
    ],
  };
};

export default extractBundle;
