var path = require('path')
var webpack = require('webpack')
var MemoryFs = require('memory-fs')

module.exports = () => {
  var compiler = webpack({
    context: __dirname,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname),
      filename: 'bunlde.js'
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        main: path.resolve(__dirname, './src'),
        packages: path.resolve(__dirname, './packages')
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: {
            loader: path.resolve(__dirname, '../index.js')
          }
        }
      ]
    }
  })

  compiler.outputFileSystem = new MemoryFs()

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      // console.log(err, stats)
      if (err) {
        reject(err)
      }
      resolve(stats)
    })
  })
}
