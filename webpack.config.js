const path = require('path');

module.exports = [
  {
    entry: {
      app: [
        './src/index.js',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/.*/,
          loader: 'babel-loader',
          query: {
            'presets': [
              '@babel/preset-env'
            ],
            'plugins': [
              [
                '@babel/plugin-transform-runtime',
                {
                  'corejs': 2,
                  'helpers': true,
                  'regenerator': true,
                  'useESModules': false,
                }
              ]
            ],
          },
        },
      ],
    },
  },
];
