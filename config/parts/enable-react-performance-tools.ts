const enableReactPerformanceTools = () => ({
  module: {
    loaders: [
      {
        test: require.resolve('react'),
        loader: 'expose?React',
      },
    ],
  },
});

export default enableReactPerformanceTools;
