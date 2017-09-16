const loadJSX = (include: any) => ({
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        // Enable caching for extra performance
        loaders: ['babel?cacheDirectory'],
        include: include,
      },
    ],
  },
});
export default loadJSX;
