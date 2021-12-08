module.exports = (config) => {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'test-context.js', watched: false }
    ],
    preprocessors: {
      'test-context.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
      watch: true
    }
  })
}