const loadIsparta = (include: any) => ({
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['isparta'],
        include: include,
      },
    ],
  },
});

export default loadIsparta;
