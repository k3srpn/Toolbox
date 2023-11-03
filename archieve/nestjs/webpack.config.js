const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (options, webpack) => {
  const lazyImports = [
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
  ];
  return {
    ...options,
    entry: {
      coupon: './src/handlers/coupon.ts',
      clova: './src/handlers/clova.ts'
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
          }
        })
      ]
    },
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename, autoRestart: false }),
    ],
    output: {
      ...options.output,
      filename: '[name].js',
      libraryTarget: 'commonjs2'
    }
  };
};