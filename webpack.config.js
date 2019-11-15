module.exports = {
  module: {
    rules: [
      'file-loader',
      {
        test: /\.(png|jpe?g|gif)$/i,
        options: {
          bypassOnDebug: true, // webpack@1.x
          disable: true // webpack@2.x and newer
        }
      }
    ]
  }
};
