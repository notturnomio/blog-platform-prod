import webpack from 'webpack';
import HTMLWebpackplugin from 'html-webpack-plugin';
import { type BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackplugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new ReactRefreshWebpackPlugin({ overlay: false })
  ];
  if (isDev) {
    plugins.push(
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      new BundleAnalyzerPlugin({ analyzerMode: (process.env.analyze as 'server') || 'disabled' })
    );
  }
  return plugins;
}
