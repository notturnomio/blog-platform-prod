import { type BuildOptions } from './types/config';
import type webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const cssLoader = buildCssLoaders(isDev);

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'es'],
              keyAsDefaultValue: false,
              saveMissing: false
            }
          ]
        ]
      }
    }
  };
  // t("key", {ns: "locale-file"})

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  return [cssLoader, babelLoader, typescriptLoader, svgLoader, fileLoader];
}
