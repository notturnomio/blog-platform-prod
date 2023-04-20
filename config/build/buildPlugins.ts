import HTMLWebpackplugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { buildOptions } from "./types/config";

export function buildPlugins({
  paths,
}: buildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackplugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
