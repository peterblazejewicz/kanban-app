import * as webpack from 'webpack';

const setFreeVariable = (key: string, value: any) => {
  const env: { [id: string]: string } = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [new webpack.DefinePlugin(env)],
  };
};

export default setFreeVariable;
