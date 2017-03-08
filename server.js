const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const express = require('express');
const path = require('path');


/**
 * Node Server (Webpack / Express)
 */

// server.js
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('data/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3001, function () {
  console.log('JSON Server is running:3001')
})

const app = new WebpackDevServer(webpack(config), {
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
})


app.use('/', express.static(__dirname))
//app.use('/api', jsonServer.router('data/db.json'))
app.listen(3002, 'localhost', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('Listening at localhost:3002')
});
