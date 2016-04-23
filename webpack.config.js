module.exports = {
  entry: __dirname + "/src/app.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    sourceMapFilename: "[file].map"
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
