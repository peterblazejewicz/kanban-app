const lintJSX = (include: any) => ({
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint'],
        include: include,
      },
    ],
  },
});
export default lintJSX;
