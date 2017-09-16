import { Configuration, DefinePlugin } from 'webpack';

const setFreeVariable: (key: string, value: string) => Configuration = (
  key,
  value,
) => {
  const env: { [id: string]: string } = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [new DefinePlugin(env)],
  };
};

export default setFreeVariable;
