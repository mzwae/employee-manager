var webpack = require('webpack')
	
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          // 'API_URL': JSON.stringify(process.env.apiUrl),
          'projectId': JSON.stringify('vuefs-prod-49de0')
        }
      })
    ]
  }
}