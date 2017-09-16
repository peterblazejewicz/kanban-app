const setupCSS = (paths: any) => ({
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: paths,
      },
    ],
  },
});

export default setupCSS;
